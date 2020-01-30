import { TestBed } from '@angular/core/testing';

import { BuildDescService } from './build-desc.service';

describe('BuildDescService', () => {
  let service: BuildDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
