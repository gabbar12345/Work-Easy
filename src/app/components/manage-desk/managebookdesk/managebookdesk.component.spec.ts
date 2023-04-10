import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookdeskComponent } from './managebookdesk.component';

describe('ManagebookdeskComponent', () => {
  let component: ManagebookdeskComponent;
  let fixture: ComponentFixture<ManagebookdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebookdeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagebookdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
