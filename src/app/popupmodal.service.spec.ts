import { TestBed } from '@angular/core/testing';

import { PopupmodalService } from './popupmodal.service';

describe('PopupmodalService', () => {
  let service: PopupmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
