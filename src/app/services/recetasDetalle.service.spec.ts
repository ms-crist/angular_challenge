/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecetasDetalleService } from './recetasDetalle.service';

describe('Service: RecetasDetalle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetasDetalleService]
    });
  });

  it('should ...', inject([RecetasDetalleService], (service: RecetasDetalleService) => {
    expect(service).toBeTruthy();
  }));
});
