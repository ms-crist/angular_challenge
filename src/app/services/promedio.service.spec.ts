/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromedioService } from './promedio.service';

describe('Service: Promedio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromedioService]
    });
  });

  it('should ...', inject([PromedioService], (service: PromedioService) => {
    expect(service).toBeTruthy();
  }));
});
