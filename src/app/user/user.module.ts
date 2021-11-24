import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';

import { CommonModule } from '@angular/common';
import { BorrarComponent } from './pages/borrar/borrar.component';
import { ListasComponent } from './pages/listas/listas.component';
import { CreateComponent } from './pages/create/create.component';



@NgModule({
  declarations: [
    BorrarComponent,
    ListasComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
