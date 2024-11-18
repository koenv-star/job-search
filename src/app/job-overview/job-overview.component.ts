import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { Job, JobsService } from '../jobs.service';

@Component({
  selector: 'js-job-overview',
  standalone: true,
  imports: [],
  templateUrl: './job-overview.component.html',
  styleUrl: './job-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobOverviewComponent {

  protected jobs: Signal<Job[]> = this.jobsService.jobs

  constructor(protected jobsService: JobsService) {
  }

}
