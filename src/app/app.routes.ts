import { Routes } from '@angular/router';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  {path: 'jobs', component: JobOverviewComponent},
  {path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: 'jobs', pathMatch: 'full' }
];
