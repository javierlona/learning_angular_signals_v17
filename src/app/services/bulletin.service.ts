import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private bulletinSignal = signal(2);

  readonly bulletin = this.bulletinSignal.asReadonly();

  constructor() { }

  square() {
    this.bulletinSignal.update(val => val * val);
  }
}
