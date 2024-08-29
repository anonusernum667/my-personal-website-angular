import { AfterViewInit, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import Swiper from 'swiper';
import * as AOS from 'aos';
import { PopupmodalService } from '../popupmodal.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(private contactFormService: PopupmodalService){}
  openContactForm() {
    this.contactFormService.triggerForm(); // Trigger the form via the service
  }


}
