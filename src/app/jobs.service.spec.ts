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
    httpTestingController.verify(); // Ensure no outstanding HTTP requests
  });

  it('should contain the returned jobs', () => {
    const mockJobs: Job[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ];

    expect(service.jobs()).toEqual([]);

    const req = httpTestingController.expectOne('/jobs');
    expect(req.request.method).toBe('GET');
    req.flush(mockJobs);

    expect(service.jobs()).toEqual(mockJobs);
  });
});
