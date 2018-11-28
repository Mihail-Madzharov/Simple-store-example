import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFlowService {
  constructor(private http: HttpClient) {}

  fetchApi(search: string): Observable<any> {
    return this.http.get<any>(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}`);
  }
}
