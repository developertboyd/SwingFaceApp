import { TestBed } from '@angular/core/testing';

import { CardQueryService } from './card-query.service';

describe('CardQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardQueryService = TestBed.get(CardQueryService);
    expect(service).toBeTruthy();
  });
});
