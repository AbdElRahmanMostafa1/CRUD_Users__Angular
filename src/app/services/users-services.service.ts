import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersServicesService {
  url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.url);
  }

  getSingleUser(id: any) {
    return this.http.get(this.url + id);
  }

  editUser(id: any, body: any) {
    return this.http.patch(this.url + id, body);
  }

  addUser(body: any) {
    return this.http.post(this.url, body);
  }

  deleteUser(id: any) {
    return this.http.delete(this.url + id);
  }
}
