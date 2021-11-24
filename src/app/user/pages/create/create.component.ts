import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public charName: string = '';
  public charId: number = 0;
  public charUser: string = '';
  public charEmail: string ='';
  public charTelefono: number = 0;
  public charCalle: string = '';
  public charCiudad: string = '';
  public charCp: number = 0;
  constructor(private usersServices: UsersService) { }

  ngOnInit(): void {

  }

  createUser(){
    const users: Users = {
      id: this.charId,
      name: this.charName,
      username: this.charUser,
      email: this.charEmail,
      address: {
        street: this.charCalle,
        city: this.charCiudad,
        zipcode: this.charCp,
      },
      phone: this.charTelefono
    }
    this.sendUser(users);
  }

  sendUser(users: Users){
    this.usersServices.pushUser(users).subscribe(data => {
      console.log(data);
    })
  }
}
