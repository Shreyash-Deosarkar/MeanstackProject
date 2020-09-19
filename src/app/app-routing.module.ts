import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SingupComponent } from './Components/singup/singup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'addproduct',component:AddproductComponent},

  //wildcard routing  i.e it will display incase wrong url
  { path:'**',component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
