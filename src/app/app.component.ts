import { Component, HostBinding, OnInit } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  Router,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from './contact-form/contact-form.component';
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
import { routeTransition } from '../route-animation';
import bootstrap from '../main.server';
import { app } from '../../server';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PopupmodalService } from './popupmodal.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    ContactFormComponent,
    NgClass,
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SweetAlert2Module,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeTransition],
})
export class AppComponent {
  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private contactFormService: PopupmodalService
  ) {}
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  stateVariable = 'enter';

  // Toggle state to trigger animation
  toggleState() {
    this.stateVariable = this.stateVariable === 'enter' ? 'leave' : 'enter';
  }

  currentRoute: string = '';

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true,
    });

    // Listen to router events to detect navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        // Refresh AOS to apply animations to the new content
        AOS.refresh();
      }
    });
  }

  openContactForm() {
    this.contactFormService.triggerForm(); // Trigger the form via the service
  }
}
