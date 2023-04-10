import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCafeComponent } from './manage-cafe.component';

describe('ManageCafeComponent', () => {
  let component: ManageCafeComponent;
  let fixture: ComponentFixture<ManageCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
