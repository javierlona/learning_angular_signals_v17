import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private bulletinSignal = signal(2);
  private bulletinInfoSignal = signal("Dud");

  readonly bulletin = this.bulletinSignal.asReadonly();
  readonly bulletinInfo = this.bulletinInfoSignal.asReadonly();

  constructor(private http: HttpClient) {
    console.log("constructor");
    setTimeout(() => {
      http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(response => {
        console.log("Subscribe");
        this.bulletinInfoSignal.set(JSON.stringify(response));
      })
      console.log('5second delay!'); },
      5000);
  }

  square() {
    this.bulletinSignal.update(val => val * val);
  }
}
