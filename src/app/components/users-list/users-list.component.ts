import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any = []

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      console.log("users", data)
      this.users = data;
    });
  }

}
