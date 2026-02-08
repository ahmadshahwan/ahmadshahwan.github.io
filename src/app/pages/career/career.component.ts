import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from './experience/experience.component';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {Experience, Page} from '../../model';
import {Observable, of} from 'rxjs';
import {PageStateService} from '../../services/page-state.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, ScrollableComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit {

  experiences: Observable<Experience[]> = of([]);
  page: Observable<Page> = of();

  constructor(
    private readonly apiClient: ContentService,
    private readonly pageStateService: PageStateService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('career');
    this.experiences = this.apiClient.fetch('experiences');
  }
}
