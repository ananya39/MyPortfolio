import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    // For now, just log the form values
    console.log('Contact Form:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    // Optionally, reset the form
    this.name = '';
    this.email = '';
    this.message = '';
  }
} 