import { TestBed } from '@angular/core/testing';

import { ServicioApiService } from './servicio-api.service';

describe('ServicioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioApiService = TestBed.get(ServicioApiService);
    expect(service).toBeTruthy();
  });
});
