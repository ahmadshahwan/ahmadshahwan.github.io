import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {InstitutionComponent} from './institution/institution.component';
import {Observable, of} from 'rxjs';
import {Institute, Page} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [CommonModule, ScrollableComponent, InstitutionComponent],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent implements OnInit {

  page: Observable<Page> = of();
  institutes: Observable<Institute[]> = of([]);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ContentService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('classes');
    this.institutes = this.apiClient.fetch('institutes');
  }
}
