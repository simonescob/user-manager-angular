import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

interface UserItem {
  name: string,
  email: string,
  username: string,
  website: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: any = [];

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number){
    return this.http.get<UserItem>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUserPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

}
