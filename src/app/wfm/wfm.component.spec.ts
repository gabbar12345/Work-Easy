import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfmComponent } from './wfm.component';

describe('WfmComponent', () => {
  let component: WfmComponent;
  let fixture: ComponentFixture<WfmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
