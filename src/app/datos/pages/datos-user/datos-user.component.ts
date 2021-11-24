import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.css']
})
export class DatosUserComponent implements OnInit {

  public datos: Users[] = []
  constructor(private datosServices: UsersService) {}

  ngOnInit(): void {
    this.datosServices.getUsers().subscribe(resp => {
      this.datos = resp;
    })
  }

}
