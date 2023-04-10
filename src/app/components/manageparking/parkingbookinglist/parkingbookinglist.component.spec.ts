import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingbookinglistComponent } from './parkingbookinglist.component';

describe('ParkingbookinglistComponent', () => {
  let component: ParkingbookinglistComponent;
  let fixture: ComponentFixture<ParkingbookinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingbookinglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
