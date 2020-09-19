import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavComponent } from './Components/nav/nav.component';

import { SingupComponent } from './Components/singup/singup.component';
import { CartComponent } from './Components/cart/cart.component';

import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {ProductService} from './product.service'
import { from } from 'rxjs';
import {FormGroup} from '@angular/forms';


//It also contains the httpclint 
import {HttpClientModule, HttpHandler} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    SingupComponent,
    CartComponent,

    AdminComponent,
    AddproductComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  //all services must be added in providers array
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
