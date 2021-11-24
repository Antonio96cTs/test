import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarComponent } from './pages/borrar/borrar.component';
import { CreateComponent } from './pages/create/create.component';
import { ListasComponent } from './pages/listas/listas.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'borrar', component: BorrarComponent },
      { path: 'listas', component: ListasComponent },
      { path: 'create', component: CreateComponent},
      { path: '**', redirectTo: 'listas' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
