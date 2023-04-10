import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfodaysComponent } from './wfodays.component';

describe('WfodaysComponent', () => {
  let component: WfodaysComponent;
  let fixture: ComponentFixture<WfodaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfodaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfodaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
