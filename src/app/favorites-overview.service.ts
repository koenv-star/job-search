import { computed, Injectable, Signal } from '@angular/core';
import { Job, JobsService } from './jobs.service';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesOverviewService {

  favoritesOverview: Signal<Job[]> = computed(() => this.jobService.jobs().filter(job => this.favoritesService.favorites().get(job.id)))

  constructor(private readonly jobService: JobsService, private readonly favoritesService: FavoritesService) {
  }

}
