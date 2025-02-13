import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';
import {Homepage, Page} from '../../model';
import {ContentRepositoryService} from '../../services/content/content-repository.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  homepage?: Homepage;
  page?: Page;
  constructor(
    private readonly pageStateService: PageStateService,
    private readonly homeRepositoryService: ContentRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('home').subscribe(page => this.page = page);
    this.homeRepositoryService.fetch().subscribe(homepage => this.homepage = homepage);
  }
}
