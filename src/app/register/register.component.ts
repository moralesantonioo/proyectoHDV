import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userData = {
    name: '',
    email: '',
    age: null,
  };

  constructor(private router: Router) {}

  register() {
    // Guarda la información en localStorage o una variable temporal
    const userId = new Date().getTime().toString(); // Genera un ID único
    localStorage.setItem(userId, JSON.stringify(this.userData));

    // Redirige a la ruta específica del usuario
    this.router.navigate(['/user', userId]);
  }
}
