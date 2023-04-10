import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageparkingslotComponent } from './manageparkingslot.component';

describe('ManageparkingslotComponent', () => {
  let component: ManageparkingslotComponent;
  let fixture: ComponentFixture<ManageparkingslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageparkingslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageparkingslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
