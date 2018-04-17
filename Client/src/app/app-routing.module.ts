import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RtcModuleComponent } from './components/rtc-module/rtc-module.component';
import { EqeModuleComponent } from './components/eqe-module/eqe-module.component';
import { LsiModuleComponent } from './components/lsi-module/lsi-module.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rtc', component: RtcModuleComponent },
  { path: 'lsi', component: LsiModuleComponent },
  { path: 'eqe', component: EqeModuleComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
