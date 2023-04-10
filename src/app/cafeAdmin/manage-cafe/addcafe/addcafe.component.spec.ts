import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcafeComponent } from './addcafe.component';

describe('AddcafeComponent', () => {
  let component: AddcafeComponent;
  let fixture: ComponentFixture<AddcafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
