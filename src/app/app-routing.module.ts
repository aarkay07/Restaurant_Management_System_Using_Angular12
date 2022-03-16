import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component'
import { UpdateRestoComponent } from './update-resto/update-resto.component'
import { ListRestoComponent } from './list-resto/list-resto.component'
import { LoginRestoComponent } from './login-resto/login-resto.component'
import { RegisterRestoComponent } from './register-resto/register-resto.component';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add'
  },
  {
    component: ListRestoComponent,
    path: 'list'
  },
  {
    component: UpdateRestoComponent,
    path: 'update'
  },
  {
    component: LoginRestoComponent,
    path: 'login'
  },
  {
    component: RegisterRestoComponent,
    path: 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
