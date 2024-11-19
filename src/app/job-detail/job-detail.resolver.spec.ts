import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { jobDetailResolver } from './job-detail.resolver';
import { of } from 'rxjs';
import { JobDetail, JobDetailService } from '../job-detail.service';

describe('jobDetailResolver', () => {
  const executeResolver: ResolveFn<JobDetail> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => jobDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: JobDetailService, useValue: {
            getJob$: of({id: 1})
          }
        }
      ]
    });
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
