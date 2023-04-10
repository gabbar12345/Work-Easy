import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingliveComponent } from './parkinglive.component';

describe('ParkingliveComponent', () => {
  let component: ParkingliveComponent;
  let fixture: ComponentFixture<ParkingliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
