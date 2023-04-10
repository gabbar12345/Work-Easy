import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSidenavComponent } from './emp-sidenav.component';

describe('EmpSidenavComponent', () => {
  let component: EmpSidenavComponent;
  let fixture: ComponentFixture<EmpSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
