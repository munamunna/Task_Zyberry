import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    // Call the AuthService to validate the user's credentials
    const isValidUser = this.authService.validateUser(this.username, this.password);
    if (isValidUser) {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
