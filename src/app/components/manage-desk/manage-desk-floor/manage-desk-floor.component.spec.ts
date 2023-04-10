import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeskFloorComponent } from './manage-desk-floor.component';

describe('ManageDeskFloorComponent', () => {
  let component: ManageDeskFloorComponent;
  let fixture: ComponentFixture<ManageDeskFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDeskFloorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDeskFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
