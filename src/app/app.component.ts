import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = signal(0);

  computedCounter = computed(() => {
    return this.counter() * 10;
  });

  course = signal({
    id: 1,
    title: "Angular for newboobs"
  });

  constructor() { }

  increment() {
    this.counter.update(val => val + 1);

    this.course.set({
      id: 1,
      title: "Hello World"
    });
  }
}
