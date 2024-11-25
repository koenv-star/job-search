import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { Job, JobsService } from '../jobs.service';
import { PrefixPipe } from '../prefix-id.pipe';
import { FavoritesService } from '../favorites.service';
import { RouterLink } from '@angular/router';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';

@Component({
  selector: 'js-job-overview',
  standalone: true,
  imports: [
    PrefixPipe,
    ToggleFavoriteDirective,
    RouterLink
  ],
  templateUrl: './job-overview.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobOverviewComponent {

  protected jobs: Signal<Job[]> = this.jobsService.jobs
  protected favorites: Signal<Set<number>> = this.favoritesService.favorites

  constructor(protected jobsService: JobsService, protected favoritesService: FavoritesService) {
  }

}
