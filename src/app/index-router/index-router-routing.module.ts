import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent} from '../user-register/user-register.component';
import { UserMyAccountComponent } from '../user-my-account/user-my-account.component';


const routes: Routes = [
  {
    path:'',
    component: UserLoginComponent
  },
  {
    path:'login',
    component: UserLoginComponent
  },
  {
    path:'register',
    component: UserRegisterComponent
  },
  {
    path:'accounts',
    component: UserMyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndexRouterRoutingModule { }
