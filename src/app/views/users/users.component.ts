import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  deleted: Boolean = false;
  added: Boolean = false;
  constructor(private usersService: UsersServicesService) {}

  getAllUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //BUG : WHAT ABOUT ADDING COMPANY

  postUser(data: any) {
    this.usersService.addUser(data).subscribe({
      next: () => {
        this.users.unshift(data);
        setTimeout(() => (this.added = true), 200);
        setTimeout(() => (this.added = false), 2500);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteUser(id: any, index: number) {
    this.usersService.deleteUser(id).subscribe({
      next: () => {
        this.users.splice(index, 1);
        setTimeout(() => {
          this.deleted = true;
        }, 200);
        setTimeout(() => {
          this.deleted = false;
        }, 2500);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // TODO Assign to delete action
  // @ViewChild('name') name!: ElementRef;
  // log(test: any) {
  //   console.dir(test);
  //   console.log(this.name);
  // }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
