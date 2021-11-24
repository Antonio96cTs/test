import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosRoutingModule } from './datos-routing.module';
import { DatosUserComponent } from './pages/datos-user/datos-user.component';
import { LitadoDatosUserComponent } from './pages/litado-datos-user/litado-datos-user.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DatosUserComponent,
    LitadoDatosUserComponent
  ],
  imports: [
    CommonModule,
    DatosRoutingModule,
    MaterialModule
  ]
})
export class DatosModule { }
