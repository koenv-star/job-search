import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

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

  constructor(private readonly http: HttpClient) {
  }

  private getJobs$(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }
}
