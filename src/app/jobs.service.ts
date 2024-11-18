import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

interface Job {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  readonly jobs: Signal<Job[]> = toSignal(this.getJobs$(), {initialValue: []})

  constructor(private readonly http: HttpClient) {
  }

  private getJobs$(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }
}
