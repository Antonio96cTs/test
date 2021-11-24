import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../core/interfaces/users/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.api);
  }

  delUsers(id: number): Observable<any>{
    return this.http.delete(`${environment.api}/${id}`);
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(environment.api, user);
  }

  updateUser(user: Users): Observable<Users> {
    return this.http.put<Users>(`${environment.api}/${user.id}`, user);
  }
}
