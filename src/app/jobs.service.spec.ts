import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Job, JobsService } from './jobs.service';

describe('JobsService', () => {
  let service: JobsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobsService],
    });

    service = TestBed.inject(JobsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should contain the returned jobs', () => {
    const mockJobs: Job[] = [
      {id: 1, title: 'title-1', companyLogo: 'logo-1', companyName: 'company-1', reference: 'reference-1'},
      {id: 2, title: 'title-2', companyLogo: 'logo-2', companyName: 'company-2', reference: 'reference-2'},
      {id: 3, title: 'title-3', companyLogo: 'logo-3', companyName: 'company-3', reference: 'reference-3'},
    ];

    expect(service.jobs()).toEqual([]);

    const req = httpTestingController.expectOne('/jobs');
    expect(req.request.method).toBe('GET');
    req.flush(mockJobs);

    expect(service.jobs()).toEqual(mockJobs);
  });
});
