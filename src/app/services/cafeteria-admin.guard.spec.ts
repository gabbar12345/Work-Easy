import { TestBed } from '@angular/core/testing';

import { CafeteriaAdminGuard } from './cafeteria-admin.guard';

describe('CafeteriaAdminGuard', () => {
  let guard: CafeteriaAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CafeteriaAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
