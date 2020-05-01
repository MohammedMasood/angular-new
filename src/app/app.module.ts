import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from '../app/firebaseAuth/auth.service';
import  { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { FooterComponent } from './component/dashboard/footer/footer.component';
import {NavbarComponent} from './component/dashboard/navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent

 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
 
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
