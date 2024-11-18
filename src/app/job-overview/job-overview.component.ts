import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { Job, JobsService } from '../jobs.service';
import { PrefixPipe } from '../prefix-id.pipe';

@Component({
  selector: 'js-job-overview',
  standalone: true,
  imports: [
    PrefixPipe
  ],
  templateUrl: './job-overview.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobOverviewComponent {

  protected jobs: Signal<Job[]> = this.jobsService.jobs

  constructor(protected jobsService: JobsService) {
  }

}
