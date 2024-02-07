import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';
import {HomepageRepositoryService} from '../../services/content/homepage-repository.service';
import Homepage from '../../model/homepage';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  homepage?: Homepage;
  constructor(
    private readonly pageStateService: PageStateService,
    private readonly homeRepositoryService: HomepageRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('home');
    this.homeRepositoryService.fetch().subscribe(homepage => this.homepage = homepage);
  }
}
