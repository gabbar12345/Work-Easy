import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivedeskComponent } from './livedesk.component';

describe('LivedeskComponent', () => {
  let component: LivedeskComponent;
  let fixture: ComponentFixture<LivedeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivedeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
