import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenderComponent } from './components/lender/lender.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'lender', component: LenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
