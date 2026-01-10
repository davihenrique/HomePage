import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Link {
  id: string;
  title: string;
  url: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class LinksService {
  private readonly linksUrl = '/data/links.json';

  constructor(private http: HttpClient) {}

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linksUrl, { headers: { 'Cache-Control': 'no-store' } });
  }
}
