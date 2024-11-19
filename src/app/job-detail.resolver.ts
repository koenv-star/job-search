import { ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { JobDetail, JobDetailService } from './job-detail.service';

export const jobDetailResolver: ResolveFn<JobDetail> = (route, state: RouterStateSnapshot, jobDetailService: JobDetailService = inject(JobDetailService)) => {
  return jobDetailService.getJob$(Number(route.paramMap.get('id')));
};
