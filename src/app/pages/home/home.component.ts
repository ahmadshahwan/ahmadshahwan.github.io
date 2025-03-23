import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageStateService} from '../../services/page-state.service';
import {Page} from '../../model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  page?: Page;

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('home').subscribe(page => this.page = page);
  }
}
