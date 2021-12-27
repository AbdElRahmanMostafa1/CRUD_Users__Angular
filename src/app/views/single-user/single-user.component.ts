import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
  user: any = {};
  constructor(
    private usersService: UsersServicesService,
    private route: ActivatedRoute
  ) {}

  id: string = this.route.snapshot.params['id'];

  getSingleUser() {
    this.usersService.getSingleUser(this.id).subscribe({
      next: (res: any) => {
        this.user = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {
    this.getSingleUser();
  }
}
