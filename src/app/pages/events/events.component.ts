import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable, of} from 'rxjs';
import {EventComponent} from './event/event.component';
import {Event, Page} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, EventComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  events: Observable<Event[]> = of([]);
  page: Observable<Page> = of();

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ContentService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('events');
    this.events = this.apiClient.fetch('events');
  }
}
