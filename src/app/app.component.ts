import { Component, computed, signal } from '@angular/core';
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

  // A computed signal derives its value from other signals.
  computedCounter = computed(() => {
    return this.counter() * 10;
  });

  course = signal({
    id: 1,
    title: "Angular Signals for newbs"
  });

  constructor() { }

  increment() {
    // Difference between set and update
    // https://www.angulartraining.com/daily-newsletter/three-ways-to-update-angular-signals/
    this.counter.update(val => val + 1);

    this.course.set({
      id: 1,
      title: "I changed the title!"
    });
  }
}
