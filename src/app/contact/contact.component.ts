import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;
  formSubmitted = false;

  submitForm(form?: NgForm) {
    this.formSubmitted = true;
    
    // Check if form is valid
    if (this.name && this.email && this.message) {
      // In a real app, you would send the form data to your backend here
      this.submitted = true;
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.submitted = false;
    this.formSubmitted = false;
  }
}