import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrefixPipe } from '../prefix-id.pipe';
import { JobDetail } from '../job-detail.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'js-job-detail',
  standalone: true,
  imports: [
    PrefixPipe,
    DatePipe
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDetailComponent {

  @Input()
  job!: JobDetail;

  back() {
    history.back();
  }
}
