import { TestBed } from '@angular/core/testing';

import { CidadeServiceService } from './cidade-service.service';

describe('CidadeServiceService', () => {
  let service: CidadeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
