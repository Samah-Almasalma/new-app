import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AddcostComponent } from './addcost/addcost/addcost.component';
import { AddprojectComponent } from './addproject/addproject/addproject.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddcostComponent,
    AddprojectComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
