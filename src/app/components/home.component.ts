import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksService, Link } from '../services/links.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  links$;
  utcDateTime = signal(this.getDateTimeUTC());
  brDateTime = signal(this.getDateTimeBR());
  private timer: any;

  constructor(public linksService: LinksService) {
    this.links$ = this.linksService.getLinks();
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.utcDateTime.set(this.getDateTimeUTC());
      this.brDateTime.set(this.getDateTimeBR());
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private getDateTimeUTC() {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return {
      date: `${pad(now.getUTCDate())}/${pad(now.getUTCMonth() + 1)}/${now.getUTCFullYear()}`,
      time: `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`,
    };
  }

  private getDateTimeBR() {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return {
      date: `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`,
      time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
    };
  }
}
