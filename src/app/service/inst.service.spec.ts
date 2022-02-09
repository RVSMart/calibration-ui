import { TestBed } from '@angular/core/testing';

import { InstService } from './inst.service';

describe('InstService', () => {
  let service: InstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
