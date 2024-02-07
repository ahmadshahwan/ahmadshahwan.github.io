import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {PageStateService} from '../../services/content/page-state.service';
import {Observable, of} from 'rxjs';
import Page from '../../model/page';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ScrollableComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent implements OnInit {

  page: Observable<Page | undefined> = of(undefined);

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('research');
  }
}
