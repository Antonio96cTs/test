import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosUserComponent } from './pages/datos-user/datos-user.component';
import { LitadoDatosUserComponent } from './pages/litado-datos-user/litado-datos-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'datos', component: DatosUserComponent },
      { path: 'litadoDatosUser', component: LitadoDatosUserComponent },
      { path: '**', redirectTo: 'datos' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosRoutingModule { }
