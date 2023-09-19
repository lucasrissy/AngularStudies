import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/LoginComponent";

const routes: Routes = [
  { path: '', component: LoginComponent }, // aqui eu irei adicionar o login a minha pag inicial
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
