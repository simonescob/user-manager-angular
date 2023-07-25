import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UserItem {
  name: string,
  email: string,
  username: string,
  website: string,
  id: number
}

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() userItem: UserItem = {
    name: '',
    email: '',
    username: '',
    website: '',
    id: 0
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToUserDetail(id: number){
    this.router.navigate(['user', id]);
  }

}
