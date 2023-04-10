import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcafeComponent } from './allcafe.component';

describe('AllcafeComponent', () => {
  let component: AllcafeComponent;
  let fixture: ComponentFixture<AllcafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
