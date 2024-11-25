import { TestBed } from '@angular/core/testing';

import { FavoritesOverviewService } from './favorites-overview.service';
import { Job, JobsService } from './jobs.service';
import { signal, WritableSignal } from '@angular/core';
import { FavoritesService } from './favorites.service';

describe('FavoritesOverviewService', () => {
  let service: FavoritesOverviewService;
  let jobs: WritableSignal<Job[]> = signal([])
  let favorites: WritableSignal<Set<number>> = signal(new Set())

  let job1: Job = {
    id: 1,
    title: 'title-1',
    companyLogo: 'logo-1',
    companyName: 'company-1',
    reference: 'reference-1'
  };
  let job2: Job = {
    id: 2,
    title: 'title-2',
    companyLogo: 'logo-2',
    companyName: 'company-2',
    reference: 'reference-2'
  };
  let job3: Job = {
    id: 3,
    title: 'title-3',
    companyLogo: 'logo-3',
    companyName: 'company-3',
    reference: 'reference-3'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: JobsService, useValue: {
            jobs: jobs
          }
        },
        {
          provide: FavoritesService, useValue: {
            favorites: favorites
          }
        }]
    })
    service = TestBed.inject(FavoritesOverviewService);
    jobs.set([])
    favorites.set(new Set<number>())
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.favoritesOverview()).toEqual([]);
  });

  it('should return only the jobs marked as favorite', () => {
    let favoriteJob: Job = job2

    jobs.set([job1, favoriteJob, job3,])
    favorites.set(new Set([favoriteJob.id]))

    const favoriteJobs = service.favoritesOverview();
    expect(favoriteJobs).toEqual([favoriteJob]);
  });
})
;
