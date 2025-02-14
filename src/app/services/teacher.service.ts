import {Inject, Injectable} from '@angular/core';
import {RC_TEACHER_API_URL} from "../app.constants";
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../models/dto/teacher.model";
import {Observable} from "rxjs";
import {ApiResponse} from "../models/dto/api.response";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    @Inject(RC_TEACHER_API_URL) private apiUrl: string,
    private http: HttpClient
  ) {
  }

  create = (teacher: Teacher): Observable<ApiResponse> => this.http.post<ApiResponse>(this.apiUrl, teacher);
  getAll = (): Observable<Teacher[]> => this.http.get<Teacher[]>(this.apiUrl);
  getAllBySchool = (schoolId: number): Observable<Teacher[]> => this.http.get<Teacher[]>(`${this.apiUrl}/school/${schoolId}`);
  getById = (id: number): Observable<Teacher> => this.http.get<Teacher>(`${this.apiUrl}/${id}`);
}
