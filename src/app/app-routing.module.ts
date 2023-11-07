import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KidoboysComponent } from './pages/kidoboys/kidoboys.component';
import { KidogirlsComponent } from './pages/kidogirls/kidogirls.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'kidoboys',component:KidoboysComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'kidogirls',component:KidogirlsComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
