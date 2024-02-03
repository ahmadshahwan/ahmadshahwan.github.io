import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ScrollableComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent implements OnInit {

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('publications');
  }
}
