import { Routes } from '@angular/router';
import { JobOverviewComponent } from './job-overview/job-overview.component';

export const routes: Routes = [
  {path: 'jobs', component: JobOverviewComponent},
  { path: '**', redirectTo: 'jobs', pathMatch: 'full' }
];
