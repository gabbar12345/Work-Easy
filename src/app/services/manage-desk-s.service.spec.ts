import { TestBed } from '@angular/core/testing';

import { ManageDeskSService } from './manage-desk-s.service';

describe('ManageDeskSService', () => {
  let service: ManageDeskSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDeskSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
