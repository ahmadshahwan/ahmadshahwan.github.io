import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {PageStateService} from '../../services/page-state.service';
import {Observable, of} from 'rxjs';
import {Page, Publication} from '../../model';
import {ContentService} from '../../services/content.service';

type Category = Publication['category'];

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ScrollableComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent implements OnInit {

  page: Observable<Page> = of();
  publications: Publication[] = [];

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ContentService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('research');
    this.apiClient
      .fetch('publications')
      .subscribe(publications => this.publications = publications);
  }

  get categories(): Category[] {
    return this.publications
      .map(p => p.category)
      .reduce((acc: Category[], category) => acc.some(c => c.id === category.id) ? acc : [...acc, category], [])
      .sort((a, b) => a.rank - b.rank);
  }

  publicationsByCategory(category: Publication['category']): Publication[] {
    return this.publications.filter(p => p.category.id === category.id)
      .sort((a, b) => b.year - a.year);
  }
  yearsByCategory(category: Publication['category']): number[] {
    return this.publicationsByCategory(category)
      .map(p => p.year)
      .reduce((acc: number[], val) => acc.includes(val) ? acc : [...acc, val], [])
      .sort((a, b) => b - a);
  }

  publicationsByCategoryAndYear(category: Publication['category'], year: number): Publication[] {
    return this.publicationsByCategory(category)
      .filter(p => p.year === year);
  }
}
