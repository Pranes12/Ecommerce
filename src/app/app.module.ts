import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './functions/navbar/navbar.component';
import { FooterComponent } from './functions/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { KidoboysComponent } from './pages/kidoboys/kidoboys.component';
import { KidogirlsComponent } from './pages/kidogirls/kidogirls.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    KidoboysComponent,
    KidogirlsComponent,
    AccessoriesComponent,
    MenupageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
