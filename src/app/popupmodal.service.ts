import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupmodalService {

  private triggerFormSource = new Subject<void>();

  // Observable to notify when the form should be shown
  triggerForm$ = this.triggerFormSource.asObservable();

  // Method to trigger the form
  triggerForm() {
    this.triggerFormSource.next();
  }
}
