import { TestBed } from '@angular/core/testing';

import { DataRecaptchaService } from './data-recaptcha.service';

describe('DataRecaptchaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRecaptchaService = TestBed.get(DataRecaptchaService);
    expect(service).toBeTruthy();
  });
});
