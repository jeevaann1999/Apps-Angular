import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewPublicDataComponent } from './view-public-data/view-public-data.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewPublicDataComponent,
    ViewUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
