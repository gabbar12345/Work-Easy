import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignstatusComponent } from './assignstatus.component';

describe('AssignstatusComponent', () => {
  let component: AssignstatusComponent;
  let fixture: ComponentFixture<AssignstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
