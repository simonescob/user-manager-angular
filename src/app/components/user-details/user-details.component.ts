import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface UserDetail {
  name: string,
  email: string,
  username: string,
  website: string,
  id: number,
  phone?: string,
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: UserDetail = {
    name: '',
    email: '',
    username: '',
    website: '',
    id: 0,
    phone: '',
  }

  posts: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // 'id' is the name of the parameter specified in the route configuration
      const id = params['id'];

      this.userService.getUser(id)
      .subscribe(data => {
        console.log('data user', data);
        this.user = data
      })

      this.userService.getUserPosts()
      .subscribe((data: any) => {
        this.posts = data.filter((user: any) => user.userId === parseInt(id))
      })

    });

  }

  backToList(){
    this.router.navigateByUrl('/');
  }

}
