import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidogirlsComponent } from './kidogirls.component';

describe('KidogirlsComponent', () => {
  let component: KidogirlsComponent;
  let fixture: ComponentFixture<KidogirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidogirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidogirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
