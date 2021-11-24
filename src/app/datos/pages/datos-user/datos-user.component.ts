import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/core/interfaces/users/users';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-datos-user',
  templateUrl: './datos-user.component.html',
  styleUrls: ['./datos-user.component.css']
})
export class DatosUserComponent implements OnInit {
  
  public datos: Users[] = []
  
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'street', 'city', 'zipcode', 'phone', 'acciones'];
  dataSource = new MatTableDataSource<Users>();

  constructor(private datosServices: UsersService) {}

  ngOnInit(): void {
    this.datosServices.getUsers().subscribe(datos => {
      this.datos = datos;
      this.dataSource.data = this.datos;
    })
  }

  delete(id: number, name: string){
    this.datosServices.delUsers(id).subscribe((resp => {
      console.log(`${id} cuyo Usuario es ${name} ha sido eliminado ${resp}`)
    }))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
