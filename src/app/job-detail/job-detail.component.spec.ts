import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailComponent } from './job-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { JobDetail } from '../job-detail.service';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    component.job = mockJobDetail
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
