import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  API = "http://localhost:8080";

  public registerCollege(collegeData: any) {
    return this.http.post(`${this.API}/college`, collegeData);
  }

  public getColleges() {
    return this.http.get(`${this.API}/college`);
  }

  public deleteCollege(collegeId: any) {
    return this.http.delete(`${this.API}/college/${collegeId}`);
  }

  public updateCollege(college: any) {
    return this.http.put(`${this.API}/college/${college.id}`, college);
  }

  constructor(private http: HttpClient) { }
}
