import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {
  selectedData = new BehaviorSubject(localStorage.getItem('item'));

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=20`)
  }
}
