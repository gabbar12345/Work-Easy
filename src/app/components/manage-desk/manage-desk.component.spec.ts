import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeskComponent } from './manage-desk.component';

describe('ManageDeskComponent', () => {
  let component: ManageDeskComponent;
  let fixture: ComponentFixture<ManageDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
