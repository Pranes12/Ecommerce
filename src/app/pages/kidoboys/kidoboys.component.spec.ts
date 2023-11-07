import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidoboysComponent } from './kidoboys.component';

describe('KidoboysComponent', () => {
  let component: KidoboysComponent;
  let fixture: ComponentFixture<KidoboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidoboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidoboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
