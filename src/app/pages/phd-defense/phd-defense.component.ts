import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';
import {Observable, of} from 'rxjs';
import {Content, Page} from '../../model';
import {ContentRepositoryService} from '../../services/content/content-repository.service';

@Component({
  selector: 'app-phd-defense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phd-defense.component.html',
  styleUrl: './phd-defense.component.scss'
})
export class PhdDefenseComponent implements OnInit {

  page: Observable<Page | undefined> = of(undefined);
  content: Observable<Content | undefined> = of(undefined);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly contentRepositoryService: ContentRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('defense');
    this.content = this.contentRepositoryService.fetchBySlug('phd-defense');
  }
}
