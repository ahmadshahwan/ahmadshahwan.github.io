import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {Observable, of} from 'rxjs';
import {Page, Skill} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {SkillComponent} from './skill/skill.component';
import {ApiClientService} from '../../services/api-client.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [
    AsyncPipe,
    ScrollableComponent,
    SkillComponent
  ],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent implements OnInit {
  skills: Observable<Skill[]> = of([]);
  page: Observable<Page> = of();

  constructor(
    private readonly apiClient: ApiClientService,
    private readonly pageStateService: PageStateService,
  ) {}

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('expertise');
    this.skills = this.apiClient.fetch('skills');
  }
}
