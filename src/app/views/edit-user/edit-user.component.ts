import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: any = {};
  constructor(
    private usersServives: UsersServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: string = this.route.snapshot.params['id'];

  getUser() {
    this.usersServives.getSingleUser(this.id).subscribe({
      next: (res: any) => {
        this.user = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getData(data: any) {
    console.log(data);
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.getUser();
  }
}
