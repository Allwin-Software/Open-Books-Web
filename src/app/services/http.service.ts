import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body);
  }
}
