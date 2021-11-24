import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  public users: Users[] = [];
  @Output() fullUser: EventEmitter<any> = new EventEmitter();
  constructor(private userServices: UsersService) { }

  ngOnInit(): void {
    this.userServices.getUsers().subscribe(resp => {
      this.users = resp;
    })
  }

}
