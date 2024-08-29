import { Component, HostBinding, OnInit  } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgClass } from '@angular/common';
import * as AOS from 'aos';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { provideAnimations } from '@angular/platform-browser/animations';
import { PopupmodalService } from '../popupmodal.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgClass,MatIconModule, MatButtonModule,  RouterOutlet,
    ContactFormComponent,
    NgClass,
    CommonModule,
    RouterModule,MatSidenavModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor( private contactFormService: PopupmodalService) {}

  openContactForm() {
    this.contactFormService.triggerForm(); // Trigger the form via the service
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Toggle the menu state
  }
}
