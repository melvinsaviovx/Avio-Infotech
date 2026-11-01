import { Routes } from '@angular/router';
export const routes: Routes = [
  {path:'', title:'Avio Infotech | Software Engineering & Digital Solutions', loadComponent:()=>import('./pages/home.page').then(m=>m.HomePage)},
  {path:'services', title:'Expertise — Avio Infotech', loadComponent:()=>import('./pages/services.page').then(m=>m.ServicesPage)},
  {path:'company', title:'Our Company — Avio Infotech', loadComponent:()=>import('./pages/company.page').then(m=>m.CompanyPage)},
  {path:'ventures', title:'Ventures — Avio Infotech', loadComponent:()=>import('./pages/ventures.page').then(m=>m.VenturesPage)},
  {path:'leadership', title:'Leadership — Avio Infotech', loadComponent:()=>import('./pages/leadership.page').then(m=>m.LeadershipPage)},
  {path:'contact', title:'Start a Conversation — Avio Infotech', loadComponent:()=>import('./pages/contact.page').then(m=>m.ContactPage)},
  {path:'privacy', title:'Privacy Policy — Avio Infotech', loadComponent:()=>import('./pages/privacy.page').then(m=>m.PrivacyPage)},
  {path:'terms', title:'Terms of Use — Avio Infotech', loadComponent:()=>import('./pages/terms.page').then(m=>m.TermsPage)},
  {path:'**', title:'Page Not Found — Avio Infotech', loadComponent:()=>import('./pages/not-found.page').then(m=>m.NotFoundPage)},
];
