import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobDetail, JobDetailService } from './job-detail.service';
import { firstValueFrom } from 'rxjs';

describe('JobDetailService', () => {
  let service: JobDetailService;
  let httpTestingController: HttpTestingController;

  const mockJobDetail: JobDetail = {
    id: 75278,
    companyName: 'Scroll.io',
    title: 'People Operations Manager (Chinese / English)',
    companyLogo: 'https://interstate21.com/job-search-app/scroll-io.jpg',
    reference: '75278-people-operations-specialist-chinese-and-english',
    location: 'EMEA, Europe',
    industries: ['HR & Recruiting'],
    types: ['full-time'],
    description: '<div class="section page-centered" data-qa="job-description">...</div>',
    publishDate: '2024-02-24 08:35:13'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(JobDetailService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return the details', async () => {
    const jobId = 75278;

    const jobDetail = firstValueFrom(service.getJob$(jobId));

    const req = httpTestingController.expectOne(`/jobs/${jobId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockJobDetail);

    expect(await jobDetail).toEqual(mockJobDetail)
  });
});


