import { TestBed } from '@angular/core/testing';

import { DataPgeService } from './data-pge.service';

describe('DataPgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPgeService = TestBed.get(DataPgeService);
    expect(service).toBeTruthy();
  });
});
