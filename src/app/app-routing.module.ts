import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './component/user/user.component'
import {HomeComponent} from './component/home/home.component'
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
