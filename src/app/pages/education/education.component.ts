import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DegreeComponent} from './degree/degree.component';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {DegreeRepositoryService} from '../../services/eductation/degree-repository.service';
import {Degree, Page} from '../../model';
import {Observable, of} from 'rxjs';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, DegreeComponent, ScrollableComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  degrees: Observable<Degree[]> = of([]);
  page: Observable<Page> = of();

  constructor(
      private readonly pageStateService: PageStateService,
      private readonly repository: DegreeRepositoryService,
  ) {}

  ngOnInit() {
    this.page = this.pageStateService.updatePage('education');
    this.degrees = this.repository.fetchAll();
  }
}
