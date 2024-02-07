import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';
import {Observable, of} from 'rxjs';
import Page from '../../model/page';

@Component({
  selector: 'app-phd-defense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phd-defense.component.html',
  styleUrl: './phd-defense.component.scss'
})
export class PhdDefenseComponent implements OnInit {

  page: Observable<Page | undefined> = of(undefined);

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('defense');
  }
}
