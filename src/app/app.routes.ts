import { Routes } from '@angular/router';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { FavoriteOverviewComponent } from './favorite-overview/favorite-overview.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { jobDetailResolver } from './job-detail/job-detail.resolver';

export const routes: Routes = [
  {path: 'jobs', component: JobOverviewComponent},
  {path: 'favorites', component: FavoriteOverviewComponent},
  {path: 'jobs/:id', component: JobDetailComponent, resolve: {job: jobDetailResolver}},
  {path: '**', redirectTo: 'jobs', pathMatch: 'full'}
];
