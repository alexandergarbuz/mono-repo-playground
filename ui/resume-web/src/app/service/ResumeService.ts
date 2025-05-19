// src/app/services/resume.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '../model/Resume';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume';
  private http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getResume(): Observable<Resume> {
    return this.http.get<Resume>(this.apiUrl);
  }
}
