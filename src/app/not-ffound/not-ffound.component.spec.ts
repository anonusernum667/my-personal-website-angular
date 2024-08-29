import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFFoundComponent } from './not-ffound.component';

describe('NotFFoundComponent', () => {
  let component: NotFFoundComponent;
  let fixture: ComponentFixture<NotFFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
