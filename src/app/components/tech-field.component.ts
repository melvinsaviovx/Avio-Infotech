import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

/** Decorative realtime canvas; no fabricated telemetry or server connections. */
@Component({
  selector: 'app-tech-field',
  template: `<canvas #canvas class="tech-field-canvas" aria-hidden="true"></canvas>`,
  styles: [':host { position:absolute; inset:0; display:block; pointer-events:none } canvas { display:block; width:100%; height:100%; }'],
})
export class TechFieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static:true }) canvas!: ElementRef<HTMLCanvasElement>;
  private context?: CanvasRenderingContext2D;
  private resizeObserver?: ResizeObserver;
  private visibilityObserver?: IntersectionObserver;
  private motionMedia?: MediaQueryList;
  private raf = 0;
  private w = 0;
  private h = 0;
  private scale = 1;
  private visible = true;
  private reducedMotion = false;
  private pointerX = 0;
  private pointerY = 0;
  private targetX = 0;
  private targetY = 0;
  private readonly points = Array.from({ length: 72 }, (_, index) => {
    const a = index * 2.3999632297;
    const r = Math.sqrt((index + .5) / 72);
    return { a, r, phase: (index * 0.37) % 6.28318 };
  });

  ngAfterViewInit(): void {
    const el = this.canvas.nativeElement;
    this.context = el.getContext('2d', {alpha:true}) ?? undefined;
    if (!this.context) return;
    this.motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion = this.motionMedia.matches;
    this.motionMedia.addEventListener('change', this.onMotionChange);
    this.resizeObserver = new ResizeObserver(() => { this.measure(); this.render(performance.now()); });
    this.resizeObserver.observe(el);
    this.visibilityObserver = new IntersectionObserver(entries => {
      this.visible = !!entries[0]?.isIntersecting;
      this.syncLoop();
    }, { threshold:0.01 });
    this.visibilityObserver.observe(el);
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    window.addEventListener('pointermove', this.onPointerMove, {passive:true});
    this.measure();
    this.syncLoop();
  }

  private onMotionChange = (event: MediaQueryListEvent): void => {
    this.reducedMotion = event.matches;
    this.syncLoop();
  };
  private onVisibilityChange = (): void => this.syncLoop();
  private onPointerMove = (event: PointerEvent): void => {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    if (rect.width && rect.height && event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
      this.targetX = (event.clientX - rect.left) / rect.width * 2 - 1;
      this.targetY = (event.clientY - rect.top) / rect.height * 2 - 1;
    } else { this.targetX = 0; this.targetY = 0; }
  };
  private measure(): void {
    const el = this.canvas.nativeElement;
    this.w = Math.max(el.clientWidth, 1);
    this.h = Math.max(el.clientHeight, 1);
    this.scale = Math.min(window.devicePixelRatio || 1, 2);
    el.width = Math.round(this.w * this.scale);
    el.height = Math.round(this.h * this.scale);
    this.context?.setTransform(this.scale, 0, 0, this.scale, 0, 0);
  }
  private syncLoop(): void {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    if (!this.context) return;
    if (this.reducedMotion || !this.visible || document.hidden) {
      this.render(0);
    } else {
      this.raf = requestAnimationFrame(this.frame);
    }
  }
  private frame = (time: number): void => {
    this.render(time);
    if (!this.reducedMotion && this.visible && !document.hidden) this.raf = requestAnimationFrame(this.frame);
  };
  private render(time: number): void {
    const ctx = this.context;
    if (!ctx || !this.w || !this.h) return;
    ctx.clearRect(0,0,this.w,this.h);
    const t = time * 0.00035;
    this.pointerX += (this.targetX - this.pointerX) * .045;
    this.pointerY += (this.targetY - this.pointerY) * .045;
    const cx = this.w * .51 + this.pointerX * 17;
    const cy = this.h * .51 + this.pointerY * 13;
    const radius = Math.min(this.w * .39, this.h * .43);

    // Faint engineering grid, concentric field and moving orbital markers.
    ctx.lineWidth = .7;
    ctx.strokeStyle = 'rgba(124,149,255,.095)';
    const grid = Math.max(32, Math.min(this.w, this.h) / 11);
    for (let x = cx % grid; x < this.w; x += grid) { ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,this.h);ctx.stroke(); }
    for (let y = cy % grid; y < this.h; y += grid) { ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(this.w,y);ctx.stroke(); }
    for (let i=1;i<=4;i++) {
      const r = radius * (.4 + i*.17);
      ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.strokeStyle = i===3 ? 'rgba(117,141,255,.33)' : 'rgba(120,143,229,.15)';
      ctx.lineWidth = .8;
      ctx.setLineDash(i===4?[2,10]:i===2?[5,13]:[]);
      ctx.stroke();ctx.setLineDash([]);
    }
    ctx.save();ctx.translate(cx,cy);ctx.rotate(t*.15);
    ctx.beginPath();ctx.ellipse(0,0,radius*1.07,radius*.37,-.34,.17,Math.PI*1.35);
    ctx.strokeStyle='rgba(120,147,255,.37)';ctx.lineWidth=1.25;ctx.stroke();ctx.restore();

    const coords = this.points.map((p,i)=> {
      const a = p.a + t*.13*(i%3===0?-1:1);
      const drift = Math.sin(t*1.55+p.phase)*4;
      return { x:cx+Math.cos(a)*(radius*p.r+drift), y:cy+Math.sin(a)*(radius*p.r*.76+drift) };
    });
    for (let i=0; i<coords.length;i++) {
      const a=coords[i];
      for (let j=i+1; j<coords.length;j++) {
        const b=coords[j]; const dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;
        if (d2<9600) {
          ctx.strokeStyle=`rgba(101,132,255,${.09*(1-d2/9600)})`;
          ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        }
      }
    }
    for (let i=0;i<coords.length;i++) {
      const p=coords[i];const pulse=.5+.5*Math.sin(t*5+i*.8);
      ctx.fillStyle=i%9===0?`rgba(143,178,255,${.5+pulse*.5})`:`rgba(111,139,230,${.23+pulse*.24})`;
      ctx.beginPath();ctx.arc(p.x,p.y,i%9===0?2.1:1.05,0,Math.PI*2);ctx.fill();
    }
    const sector = t*1.2;
    for(let i=0;i<3;i++) {
      const r=radius*(.64+i*.13);
      const a=sector*(i%2===0?1:-.8)+i*1.7;
      ctx.beginPath();ctx.arc(cx,cy,r,a,a+.38);
      ctx.strokeStyle=i===1?'rgba(171,197,255,.8)':'rgba(63,102,246,.55)';
      ctx.lineWidth=i===1?1.6:1;ctx.stroke();
      const px=cx+Math.cos(a+.38)*r,py=cy+Math.sin(a+.38)*r;
      ctx.beginPath();ctx.arc(px,py,3.2,0,Math.PI*2);ctx.fillStyle='#94b0ff';ctx.fill();
    }
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.resizeObserver?.disconnect();
    this.visibilityObserver?.disconnect();
    this.motionMedia?.removeEventListener('change', this.onMotionChange);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    window.removeEventListener('pointermove', this.onPointerMove);
  }
}
