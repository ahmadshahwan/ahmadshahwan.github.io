import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {EventRepositoryService} from '../../services/events/event-repository.service';
import {Observable, of} from 'rxjs';
import {EventComponent} from './event/event.component';
import {Event, Page} from '../../model';
import {PageStateService} from '../../services/content/page-state.service';

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
    private readonly repository: EventRepositoryService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('events');
    this.events = this.repository.fetchAll();
  }
}
