import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'; // Hypothetical imports
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { PopupmodalService } from '../popupmodal.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [] // Hypothetical setup for Angular 18
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private contactFormService: PopupmodalService) {
    this.form = this.fb.group({
      from_name: '',
      from_email: '',
      from_phone: '',
    });

    emailjs.init('wGMiakVHeHZlkhBkv'); // Initialize EmailJS once
  }

  ngOnInit() {
    // Subscribe to the triggerForm observable
    this.contactFormService.triggerForm$.subscribe(() => {
      this.showContactForm();
    });
  }

  async showContactForm() {
    const { value: formValues } = await Swal.fire({
      title: '<h1 class="text-xl font-bold text-teal-300">Contact Form</h1>',
      html: `
        <form id="swal-form" class="space-y-4 w-11/12 flex items-center flex-col">
          <input id="swal-input1" name="from_name" type="text"
            class="swal2-input w-11/12 border border-gray-600 text-neutral-700 p-2 rounded"
            placeholder="Your Name">
          <input id="swal-input2" name="from_email" type="email"
            class="swal2-input w-11/12 border border-gray-600 text-neutral-700 p-2 rounded"
            placeholder="Your Email">
          <input id="swal-input3" name="from_phone" type="number"
            class="swal2-input w-11/12 border border-gray-600 text-neutral-700 p-2 rounded"
            placeholder="Your Phone">
        </form>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: `<span class="bg-teal-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded duration-500">Send</span>`,
      cancelButtonText: `<span class="bg-gray-700 text-white font-bold py-2 px-4 rounded duration-500">Close</span>`,
      preConfirm: () => {
        const name = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const email = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const phone = (document.getElementById('swal-input3') as HTMLInputElement).value;

        if (!name || !email || !phone) {
          Swal.showValidationMessage('Please fill out all fields');
          return;
        }

        // Set the form values
        this.form.setValue({
          from_name: name,
          from_email: email,
          from_phone: phone,
        });

        return { from_name: name, from_email: email, from_phone: phone };
      },
      customClass: {
        popup: 'bg-gradient-to-tr from-neutral-800 to-teal-900 text-white',
        confirmButton: 'bg-teal-800 hover:bg-slate-500',
        cancelButton: 'bg-gray-700 text-white',
      }
    });

    if (formValues) {
      this.send(); // Call the send method after confirming the form submission
    }
  }

  async send() {
    try {
      const response = await emailjs.send("service_6znkwkh", "template_0czfh7i", {
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        from_phone: this.form.value.from_phone,
      });
      console.log('Email sent successfully:', response.status, response.text);
      Swal.fire('Sent!', 'Your contact has been sent, I will call you as soon as possible', 'success');
      this.form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      Swal.fire('Oops!', 'Something went wrong. Please try again later.', 'error');
    }
  }
}
