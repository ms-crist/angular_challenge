/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecetasService } from './recetas.service';

describe('Service: Recetas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetasService]
    });
  });

  it('should ...', inject([RecetasService], (service: RecetasService) => {
    expect(service).toBeTruthy();
  }));
});
