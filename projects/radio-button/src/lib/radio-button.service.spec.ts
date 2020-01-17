import { TestBed } from '@angular/core/testing';

import { RadioButtonService } from './radio-button.service';

describe('RadioButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadioButtonService = TestBed.get(RadioButtonService);
    expect(service).toBeTruthy();
  });
});
