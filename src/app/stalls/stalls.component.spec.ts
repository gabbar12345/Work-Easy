import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StallsComponent } from './stalls.component';

describe('StallsComponent', () => {
  let component: StallsComponent;
  let fixture: ComponentFixture<StallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
