import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkbookingdetailsComponent } from './parkbookingdetails.component';

describe('ParkbookingdetailsComponent', () => {
  let component: ParkbookingdetailsComponent;
  let fixture: ComponentFixture<ParkbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkbookingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
