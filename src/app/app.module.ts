import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoadStartAndEndComponent } from './road-start-and-end/road-start-and-end.component';
import {MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RoadStartAndEndComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
