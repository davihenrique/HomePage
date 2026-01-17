import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksService } from '../services/links.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Link, Service } from '../interfaces/link.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public services$: Observable<Service[]>;
  private baseUrl: string = window.location.hostname;

  constructor(public linksService: LinksService) {
    this.services$ = this.linksService.getLinks().pipe(
      map((links: Link[]) =>
        links.map((link) => ({
          id: link.id,
          title: link.title,
          link: `${link.https ? 'https://' : 'http://'}${this.baseUrl}:${link.port}`,
          description: link.description || '',
        }))
      )
    );
  }
}
