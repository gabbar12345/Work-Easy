import { TestBed } from '@angular/core/testing';

import { ManageParkingService } from './manage-parking.service';

describe('ManageParkingService', () => {
  let service: ManageParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
