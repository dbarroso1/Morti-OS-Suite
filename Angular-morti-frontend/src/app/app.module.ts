import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RtcModuleComponent } from './components/rtc-module/rtc-module.component';
import { EqeModuleComponent } from './components/eqe-module/eqe-module.component';
import { LsiModuleComponent } from './components/lsi-module/lsi-module.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    RtcModuleComponent,
    EqeModuleComponent,
    LsiModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
