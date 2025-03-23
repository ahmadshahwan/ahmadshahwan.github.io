import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {Observable, of} from 'rxjs';
import {EventComponent} from './event/event.component';
import {Event, Page} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {ApiClientService} from '../../services/api-client.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ScrollableComponent, EventComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {

  events: Observable<Event[]> = of([]);
  page: Observable<Page> = of();

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ApiClientService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('events');
    this.events = this.apiClient.fetch('events');
  }
}
