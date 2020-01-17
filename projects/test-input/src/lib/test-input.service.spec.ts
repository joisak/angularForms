import { TestBed } from '@angular/core/testing';

import { TestInputService } from './test-input.service';

describe('TestInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestInputService = TestBed.get(TestInputService);
    expect(service).toBeTruthy();
  });
});
