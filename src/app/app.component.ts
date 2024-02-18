import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals';

  counter = signal(0);

  derivedCounter = computed(() => {
    const counter = this.counter();
    return counter * 10;
  });

  course = signal({
    id: 1,
    title: "Angular for newboobs"
  });

  courses = signal([
    "Angular For Beginners",
    "Reactive Angular Course"
  ]);

  constructor() {

    effect(() => {
      const counterValue = this.counter();
      const derivedCounter = this.derivedCounter();

      console.log(` counter: ${counterValue} derived counter: ${derivedCounter}`);
    });

  }

  increment() {
    this.counter.update(val => val + 1);

    this.course.set({
      id: 1,
      title: "Hello World"
    });

    this.courses.update(courses => [...courses, "Angular Core Deep Dive"]);
  }
}
