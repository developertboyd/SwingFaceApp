import { TestBed } from '@angular/core/testing';

import { CardLoaderService } from './card-loader.service';

describe('CardLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardLoaderService = TestBed.get(CardLoaderService);
    expect(service).toBeTruthy();
  });
});
