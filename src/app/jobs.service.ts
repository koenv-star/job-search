import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
import { FavoritesService } from './favorites.service';

export interface Job {
  id: number
  companyName: string
  title: string
  companyLogo: string
  reference: string
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  readonly jobs: Signal<Job[]> = toSignal(this.getJobs$(), {initialValue: []})

  constructor(private readonly http: HttpClient, private readonly favoritesService: FavoritesService) {
  }

  private getJobs$(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs').pipe(
      tap(jobs => this.favoritesService.initializeFavorites(jobs))
    );
  }
}
