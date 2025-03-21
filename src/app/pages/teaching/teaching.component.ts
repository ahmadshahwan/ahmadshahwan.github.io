import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {TopicComponent} from './topic/topic.component';
import {InstitutionComponent} from './institution/institution.component';
import {InstituteRepositoryService} from '../../services/teaching/institute-repository.service';
import {Observable, of} from 'rxjs';
import {Institute, Page} from '../../model';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [CommonModule, ScrollableComponent, TopicComponent, InstitutionComponent],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent implements OnInit {

  page: Observable<Page> = of();
  institutes: Observable<Institute[]> = of([]);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly repository: InstituteRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('classes');
    this.institutes = this.repository.fetchAll();
  }
}
