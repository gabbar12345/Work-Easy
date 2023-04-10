import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSidenavComponent } from './man-sidenav.component';

describe('ManSidenavComponent', () => {
  let component: ManSidenavComponent;
  let fixture: ComponentFixture<ManSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
