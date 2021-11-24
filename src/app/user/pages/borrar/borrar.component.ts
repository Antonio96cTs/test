import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  public delUser: Users[] = []
  constructor(private borrarServices: UsersService) { }

  ngOnInit(): void {
    this.borrarServices.getUsers().subscribe((resp => {
      this.delUser = resp;
    }))
  }
  
  delete(id: number, name: string){
    this.borrarServices.delUsers(id).subscribe((resp => {
      console.log(`${id} cuyo Usuario es ${name} ha sido eliminado`)
    }))
  }
}
