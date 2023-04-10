import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageparkingComponent } from './manageparking.component';

describe('ManageparkingComponent', () => {
  let component: ManageparkingComponent;
  let fixture: ComponentFixture<ManageparkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageparkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
