import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({ id: 1, name: 'Prius', price: 10000 });

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }

  totalPrice = computed(() => this.selectedVehicle().price * this.quantity());

  constructor() { 
    console.log(this.quantity());
    effect(() => {
      console.log('Quantity changed to: ' + this.quantity());
    });
  }
}
