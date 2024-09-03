import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el ID del usuario desde la URL
    const userId = this.route.snapshot.paramMap.get('id');

    // Recuperar la información del usuario desde localStorage
    const storedData = localStorage.getItem(userId!);
    this.userData = storedData ? JSON.parse(storedData) : null;
  }
}
