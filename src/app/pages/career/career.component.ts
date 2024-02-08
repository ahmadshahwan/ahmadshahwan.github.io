import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from './experience/experience.component';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {ExperienceRepositoryService} from '../../services/career/experience-repository.service';
import {Experience, Page} from '../../model';
import {Observable, of} from 'rxjs';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, ScrollableComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit {

  experiences: Observable<Experience[]> = of([]);
  page: Observable<Page | undefined> = of(undefined);

  constructor(
    private readonly repository: ExperienceRepositoryService,
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('career');
    this.experiences = this.repository.fetchAll();
  }
}
