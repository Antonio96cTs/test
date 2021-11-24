import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users: Users = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        city: '',
        zipcode: 0
    },
    phone: 0
  }
  public charname: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
