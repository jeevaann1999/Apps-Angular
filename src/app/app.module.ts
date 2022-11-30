import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewPublicDataComponent } from './view-public-data/view-public-data.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component'

const myRoute:Routes=
[
{
  path:"",
  component:ViewPassengerComponent
},
{
  path:"publicdata",
  component:ViewPublicDataComponent
},
{
  path:"userinfo",
  component:ViewUserInfoComponent
},
{
  path:"product",
  component:ViewProductComponent
},
{
  path:"userdata",
  component:ViewUserDataComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewPublicDataComponent,
    ViewUserInfoComponent,
    NavigationComponent,
    ViewProductComponent,
    ViewUserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
