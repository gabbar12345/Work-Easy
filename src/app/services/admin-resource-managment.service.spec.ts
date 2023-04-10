import { TestBed } from '@angular/core/testing';

import { AdminResourceManagmentService } from './admin-resource-managment.service';

describe('AdminResourceManagmentService', () => {
  let service: AdminResourceManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminResourceManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
