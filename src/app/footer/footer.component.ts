import { Component } from '@angular/core';
import { PopupmodalService } from '../popupmodal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private contactFormService: PopupmodalService){}
  openContactForm() {
    this.contactFormService.triggerForm(); // Trigger the form via the service
  }
}
