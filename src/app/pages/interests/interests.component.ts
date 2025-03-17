import {Component, OnInit} from '@angular/core';
import {Homepage, Page} from '../../model';
import {PageStateService} from '../../services/content/page-state.service';
import {ContentRepositoryService} from '../../services/content/content-repository.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent implements OnInit {

  homepage?: Homepage;
  page?: Page;
  constructor(
    private readonly pageStateService: PageStateService,
    private readonly homeRepositoryService: ContentRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('interests').subscribe(page => this.page = page);
    this.homeRepositoryService.fetch().subscribe(homepage => this.homepage = homepage);
  }
}
