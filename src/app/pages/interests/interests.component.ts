import {Component, OnInit} from '@angular/core';
import {Interest} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {ContentService} from '../../services/content.service';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [EntryComponent],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent implements OnInit {

  interests: Interest[] = [];
  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ContentService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('interests');
    this.apiClient.fetch('interests').subscribe(interests => this.interests = interests);
  }
}
