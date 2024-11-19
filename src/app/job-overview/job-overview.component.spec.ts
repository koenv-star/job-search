import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewComponent } from './job-overview.component';
import { Job, JobsService } from '../jobs.service';
import { signal, WritableSignal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FavoritesService } from '../favorites.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('JobOverviewComponent', () => {
  let component: JobOverviewComponent;
  let fixture: ComponentFixture<JobOverviewComponent>;

  let jobs: WritableSignal<Job[]> = signal([])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOverviewComponent, RouterTestingModule],
      providers: [
        {
          provide: JobsService, useValue: {
            jobs: jobs.asReadonly()
          }
        },
        {
          provide: FavoritesService, useValue: {
            favorites: signal(new Map())
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the jobs', () => {
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

    jobs.set([job1, job2])
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(`#job-${job1.id}`))).toBeTruthy();
    expect(fixture.debugElement.query(By.css(`#job-${job2.id}`))).toBeTruthy();
  });
});
