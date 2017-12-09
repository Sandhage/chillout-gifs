import { TestBed, inject } from '@angular/core/testing';

import { GifsService } from './gif.service';

describe('GifsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifsService]
    });
  });

  it('should be created', inject([GifsService], (service: GifsService) => {
    expect(service).toBeTruthy();
  }));
});
