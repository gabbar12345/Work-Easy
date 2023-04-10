import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstallsComponent } from './allstalls.component';

describe('AllstallsComponent', () => {
  let component: AllstallsComponent;
  let fixture: ComponentFixture<AllstallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
