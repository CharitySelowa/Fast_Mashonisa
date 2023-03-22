import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotToastModule } from '@ngneat/hot-toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { LenderComponent } from './components/lender/lender.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomePageComponent,
    LenderComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    	ReactiveFormsModule,
    HotToastModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
