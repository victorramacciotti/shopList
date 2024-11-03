import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar.component',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.component.html',
  styleUrl: './navbar.component.component.scss'
})
export class NavbarComponentComponent {
  constructor(public auth: AuthService) {}
}
