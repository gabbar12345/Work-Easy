import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetrackComponent } from './livetrack.component';

describe('LivetrackComponent', () => {
  let component: LivetrackComponent;
  let fixture: ComponentFixture<LivetrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
