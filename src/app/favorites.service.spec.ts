import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { Job } from './jobs.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty initially', () => {
    expect(service.favorites()).toEqual(new Map());
  });

  it('should initialize to map with al job ids default to false', () => {
    const jobs = [{id: 1}, {id: 2}] as Job[];

    service.initializeFavorites(jobs);

    const expectedMap = new Map<number, boolean>([
      [1, false],
      [2, false]
    ]);
    expect(service.favorites()).toEqual(expectedMap);
  });

});
