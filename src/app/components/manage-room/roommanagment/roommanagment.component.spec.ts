import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommanagmentComponent } from './roommanagment.component';

describe('RoommanagmentComponent', () => {
  let component: RoommanagmentComponent;
  let fixture: ComponentFixture<RoommanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommanagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
