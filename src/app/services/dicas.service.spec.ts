import { TestBed } from '@angular/core/testing';

import { DicasService } from './dicas.service';

describe('DicasService', () => {
  let service: DicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
