from pathlib import Path
import math,random
root=Path(__file__).parent/'public'
(root/'visuals').mkdir(exist_ok=True)
(root/'brand').mkdir(exist_ok=True)
random.seed(21)
parts=['''<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="1100" viewBox="0 0 1100 1100" fill="none"><defs>
<radialGradient id="sphere" cx="0" cy="0" r="1" gradientTransform="translate(540 510) rotate(80) scale(455)"><stop stop-color="#121a51" stop-opacity=".9"/><stop offset=".43" stop-color="#0b1031" stop-opacity=".8"/><stop offset=".75" stop-color="#080b1b" stop-opacity=".86"/><stop offset="1" stop-color="#010205" stop-opacity="0"/></radialGradient>
<linearGradient id="metal" x1="150" y1="150" x2="965" y2="1000" gradientUnits="userSpaceOnUse"><stop stop-color="#02030a"/><stop offset=".22" stop-color="#6774b4"/><stop offset=".35" stop-color="#141936"/><stop offset=".53" stop-color="#e8edff"/><stop offset=".7" stop-color="#4355bb"/><stop offset=".88" stop-color="#0c102d"/><stop offset="1" stop-color="#f0f2ff"/></linearGradient>
<linearGradient id="line" x1="100" y1="250" x2="900" y2="770" gradientUnits="userSpaceOnUse"><stop stop-color="#323967" stop-opacity="0"/><stop offset=".23" stop-color="#b4bce0" stop-opacity=".65"/><stop offset=".5" stop-color="#27357d" stop-opacity=".85"/><stop offset=".79" stop-color="#c5c9ef" stop-opacity=".8"/><stop offset="1" stop-color="#1c244f" stop-opacity=".08"/></linearGradient>
<filter id="glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="34"/></filter>
<filter id="tight" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8"/></filter>
</defs>''']
parts.append('<ellipse cx="566" cy="533" rx="300" ry="302" fill="#2c3480" opacity=".19" filter="url(#glow)"/>')
parts.append('<circle cx="555" cy="555" r="345" fill="url(#sphere)"/>')
# toroidal moire rings, nested rotated
for i in range(75):
    a=i/74
    rx=390 - a*93
    ry=180 + a*160
    x=545 + math.sin(a*math.pi*3)*19
    y=558+math.cos(a*math.pi*2)*13
    rotation=-35+a*69
    opacity=.10+.53*(math.sin(math.pi*a)**2)
    sw=1.8 if i%7==0 else .82
    parts.append(f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" transform="rotate({rotation:.2f} {x:.1f} {y:.1f})" stroke="url(#line)" stroke-width="{sw}" opacity="{opacity:.3f}"/>')
# crest edge arcs
for i in range(18):
    a=i/17
    radius=292+i*7
    x1=560+radius*math.cos(math.radians(-115))
    y1=550+radius*math.sin(math.radians(-115))
    x2=560+radius*math.cos(math.radians(70))
    y2=550+radius*math.sin(math.radians(70))
    parts.append(f'<path d="M {x1:.1f} {y1:.1f} A {radius} {radius*.92:.1f} 0 0 1 {x2:.1f} {y2:.1f}" stroke="url(#metal)" stroke-width="{.8 if i%5 else 2.2}" opacity="{.12+.43*math.sin(math.pi*a):.3f}"/>')
# center ring
parts.append('<ellipse cx="548" cy="535" rx="233" ry="352" transform="rotate(59 548 535)" stroke="#e3e7ff" stroke-width="1.1" opacity=".54"/>')
parts.append('<ellipse cx="548" cy="535" rx="245" ry="365" transform="rotate(59 548 535)" stroke="#4556b2" stroke-width="15" opacity=".14" filter="url(#tight)"/>')
# orbit particles
for i in range(52):
    theta=random.random()*math.tau
    rad=310 + random.random()*170
    x=555+math.cos(theta)*rad
    y=550+math.sin(theta)*rad*.85
    r=.5+random.random()*2
    parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="{random.choice(["#f3f4ff","#7382e5","#7382e5"])}" opacity="{random.uniform(.15,.68):.2f}"/>')
parts.append('<path d="M 335 145 L 768 927" stroke="#d7ddfb" stroke-width="1" stroke-dasharray="5 14" opacity=".25"/>')
parts.append('</svg>')
(root/'visuals'/'kinetic-orbit.svg').write_text(''.join(parts))
(root/'visuals'/'noise.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity=".13"/></svg>''')
(root/'brand'/'favicon.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#000"/><g transform="rotate(-45 32 32)"><rect x="17" y="17" width="30" height="30" fill="none" stroke="#fff" stroke-width="8"/><path d="M47 17V47H17" stroke="#7782e2" stroke-width="8" fill="none"/></g></svg>''')
(root/'brand'/'social-card.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="g"><stop stop-color="#222c7b"/><stop offset="1" stop-color="#000"/></radialGradient></defs><rect width="1200" height="630" fill="#000"/><circle cx="1030" cy="180" r="480" fill="url(#g)" opacity=".8"/><text x="72" y="180" font-family="Arial,sans-serif" font-weight="700" font-size="55" fill="#fff" letter-spacing="14">AVIO INFOTECH</text><text x="72" y="375" font-family="Arial,sans-serif" font-size="118" font-weight="700" fill="#fff" letter-spacing="-8">THINK BEYOND.</text><text x="72" y="493" font-family="Arial,sans-serif" font-size="118" font-weight="700" fill="#c3c9ff" letter-spacing="-8">BUILD BETTER.</text><rect x="70" y="550" width="1000" height="2" fill="#7581d8"/></svg>''')
print('Created:',*[str(p.relative_to(root)) for p in root.rglob('*.svg')],sep='\n')
