import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedesklistComponent } from './managedesklist.component';

describe('ManagedesklistComponent', () => {
  let component: ManagedesklistComponent;
  let fixture: ComponentFixture<ManagedesklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedesklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedesklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
