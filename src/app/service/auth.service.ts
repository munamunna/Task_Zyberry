// auth.service.ts (for demonstration purposes only)
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registeredUsers: any[] = [
    { username: 'user1', password: 'password1', email: 'user1@example.com' },
    { username: 'user2', password: 'password2', email: 'user2@example.com' },
    // Add more registered users as needed
  ];

  // Function to validate user credentials
  validateUser(username: string, password: string): boolean {
    const user = this.registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    return !!user;
  }
}
