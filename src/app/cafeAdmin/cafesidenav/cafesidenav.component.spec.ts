import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesidenavComponent } from './cafesidenav.component';

describe('CafesidenavComponent', () => {
  let component: CafesidenavComponent;
  let fixture: ComponentFixture<CafesidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafesidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
