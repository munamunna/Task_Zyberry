import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    mobile: '',
    email: '',
    request: '',
  };

  submitForm() {
    // Replace this with any additional form validation or processing you may require.
    // For demonstration purposes, we'll display an alert and clear the form fields.
    alert('Form submitted successfully');
    this.formData = {
      name: '',
      mobile: '',
      email: '',
      request: '',
    };
  }
}

