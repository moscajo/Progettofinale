import { TestBed } from '@angular/core/testing';

import { NewfatturaService } from './newfattura.service';

describe('NewfatturaService', () => {
  let service: NewfatturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewfatturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
