import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RtcModuleComponent } from './components/rtc-module/rtc-module.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NavigationService } from './navigation.service';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    RtcModuleComponent,
    TopnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
