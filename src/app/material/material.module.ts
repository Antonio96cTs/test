import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],

  exports: [
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
