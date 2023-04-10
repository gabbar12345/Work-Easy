import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageparkingareaComponent } from './manageparkingarea.component';

describe('ManageparkingareaComponent', () => {
  let component: ManageparkingareaComponent;
  let fixture: ComponentFixture<ManageparkingareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageparkingareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageparkingareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
