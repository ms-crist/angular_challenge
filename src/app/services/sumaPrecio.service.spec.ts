/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SumaPrecioService } from './sumaPrecio.service';

describe('Service: SumaPrecio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SumaPrecioService]
    });
  });

  it('should ...', inject([SumaPrecioService], (service: SumaPrecioService) => {
    expect(service).toBeTruthy();
  }));
});
