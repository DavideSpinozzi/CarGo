import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/current`);
  }

  updateCurrentUser(payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/current`, payload);
  }

  updateUser(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  getUserOpenBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/open`);
  }

  getUserClosedBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/closed`);
  }
}
