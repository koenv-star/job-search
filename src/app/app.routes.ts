import { Routes } from '@angular/router';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { FavoriteOverviewComponent } from './favorite-overview/favorite-overview.component';

export const routes: Routes = [
  {path: 'jobs', component: JobOverviewComponent},
  {path: 'favorites', component: FavoriteOverviewComponent},
  {path: '**', redirectTo: 'jobs', pathMatch: 'full'}
];
