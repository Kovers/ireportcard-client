import {Inject, Injectable} from '@angular/core';
import {RC_SUBJECT_REGISTRATION_API_URL} from "../app.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubjectRegistration} from "../models/dto/subjectregistration.model";
import {EntityResponse} from "../models/dto/entity.response";

@Injectable({
  providedIn: 'root'
})
export class SubjectRegistrationService {

  constructor(@Inject(RC_SUBJECT_REGISTRATION_API_URL) private apiUrl: string, private http: HttpClient) {
  }

  getOne(id: number): Observable<SubjectRegistration> {
    return this.http.get<SubjectRegistration>(`${this.apiUrl}/${id}`);
  }

  add(subjectRegistration: SubjectRegistration): Observable<EntityResponse> {
    return this.http.post<SubjectRegistration>(`${this.apiUrl}`, subjectRegistration);
  }

  addMultiple(subjectRegistrations: SubjectRegistration[]): Observable<EntityResponse> {
    return this.http.post<SubjectRegistration>(`${this.apiUrl}/multiple`, subjectRegistrations);
  }
}
