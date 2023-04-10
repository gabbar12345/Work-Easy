import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfmformComponent } from './wfmform.component';

describe('WfmformComponent', () => {
  let component: WfmformComponent;
  let fixture: ComponentFixture<WfmformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfmformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfmformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
