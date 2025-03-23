import {Component, OnInit} from '@angular/core';
import {Interest, Page} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {ApiClientService} from '../../services/api-client.service';

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
    private readonly apiClient: ApiClientService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('interests').subscribe(page => this.page = page);
    this.apiClient.fetch('interests').subscribe(interests => this.interests = interests);
  }
}
