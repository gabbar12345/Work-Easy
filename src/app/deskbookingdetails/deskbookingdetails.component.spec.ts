import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskbookingdetailsComponent } from './deskbookingdetails.component';

describe('DeskbookingdetailsComponent', () => {
  let component: DeskbookingdetailsComponent;
  let fixture: ComponentFixture<DeskbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskbookingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
