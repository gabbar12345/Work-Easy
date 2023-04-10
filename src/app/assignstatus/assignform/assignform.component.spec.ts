import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignformComponent } from './assignform.component';

describe('AssignformComponent', () => {
  let component: AssignformComponent;
  let fixture: ComponentFixture<AssignformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
