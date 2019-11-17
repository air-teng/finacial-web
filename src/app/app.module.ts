//import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexRouterRoutingModule } from './index-router/index-router-routing.module';

//import components
import {AppComponent} from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMyAccountComponent } from './user-my-account/user-my-account.component';
@NgModule({
  //declare components
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserMyAccountComponent
  ],
  //import modules
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    IndexRouterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
