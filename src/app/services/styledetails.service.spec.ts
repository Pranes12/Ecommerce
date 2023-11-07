import { TestBed } from '@angular/core/testing';

import { StyledetailsService } from './styledetails.service';

describe('StyledetailsService', () => {
  let service: StyledetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyledetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
