import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstallsComponent } from './addstalls.component';

describe('AddstallsComponent', () => {
  let component: AddstallsComponent;
  let fixture: ComponentFixture<AddstallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
