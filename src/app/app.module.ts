import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddvehileentryComponent } from './addvehileentry/addvehileentry.component';
import { AddtollComponent } from './addtoll/addtoll.component';
import { ViewtollComponent } from './viewtoll/viewtoll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddtollformComponent } from './addtollform/addtollform.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddnewentryComponent } from './addnewentry/addnewentry.component';
import { DisplaynewvehicleComponent } from './displaynewvehicle/displaynewvehicle.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddvehileentryComponent,
    AddtollComponent,
    ViewtollComponent,
    AddtollformComponent,
    AddnewentryComponent,
    DisplaynewvehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
