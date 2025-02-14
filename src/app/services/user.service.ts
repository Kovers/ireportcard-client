import {Inject, Injectable} from '@angular/core';
import {RC_USER_API_URL} from "../app.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User, UserComplete} from "../models/dto/user.model";
import {ApiResponse} from "../models/dto/api.response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject(RC_USER_API_URL) private apiUrl: string,
    private http: HttpClient
  ) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  getAllAdmin(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/admin`);
  }

  getComplete(id: number): Observable<UserComplete> {
    return this.http.get<UserComplete>(`${this.apiUrl}/complete/${id}`);
  }

  getCompleteFromSession(): Observable<UserComplete> {
    return this.http.get<UserComplete>(`${this.apiUrl}/complete`);
  }

  toggleApproved(id: number): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}/toggle-approved`, {});
  }

  update(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}`, user);
  }
}
