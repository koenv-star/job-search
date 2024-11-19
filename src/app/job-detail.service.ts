import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface JobDetail {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor(private readonly http: HttpClient) {
  }

  getJob$(id: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`/jobs/${id}`)
  };

}
