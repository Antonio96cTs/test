import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';

import { CommonModule } from '@angular/common';
import { ListasComponent } from './pages/listas/listas.component';
import { CreateComponent } from './pages/create/create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListasComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
