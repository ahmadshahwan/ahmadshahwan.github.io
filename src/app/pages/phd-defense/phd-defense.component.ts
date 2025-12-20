import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageStateService} from '../../services/page-state.service';
import {Page} from '../../model';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-phd-defense',
  standalone: true,
  imports: [CommonModule, EntryComponent],
  templateUrl: './phd-defense.component.html',
  styleUrl: './phd-defense.component.scss'
})
export class PhdDefenseComponent implements OnInit {

  page?: Page;

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('defense').subscribe(page => this.page = page);
  }
}
