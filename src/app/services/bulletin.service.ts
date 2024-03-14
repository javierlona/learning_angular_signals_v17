import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  
  private bulletinInfoSignal = signal<Post>({
    id: "0",
    userId: 0,
    title: "Dud",
    body: "ipsum"
  });
  private bulletinArraySignal = signal<Post[]>([{}]);

  readonly bulletinInfo = this.bulletinInfoSignal.asReadonly();
  readonly bulletinArray = this.bulletinArraySignal.asReadonly();


  constructor(private http: HttpClient) {
    // console.log("constructor");
    // setTimeout(() => {
      this.getPostById();
      this.getAllPosts();
      // console.log('5second delay!');
    // },5000);
  }

  getPostById() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(response => {
      console.log("getPostById", response.valueOf());
      this.bulletinInfoSignal.set(response);
    })
  }

  getAllPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/')
    .subscribe(response => {
      console.log("getAllPosts", response.valueOf());
      this.bulletinArraySignal.set(response);
    })
  }
}
