import {Component, OnInit} from '@angular/core';
import {Interest, Page} from '../../model';
import {PageStateService} from '../../services/content/page-state.service';
import {InterestsRepositoryService} from '../../services/hobbies/interests-repository.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent implements OnInit {

  interests: Interest[] = [];
  page?: Page;
  constructor(
    private readonly pageStateService: PageStateService,
    private readonly interestsRepositoryService: InterestsRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('interests').subscribe(page => this.page = page);
    this.interestsRepositoryService.fetchAll().subscribe(interests => this.interests = interests);
  }
}
