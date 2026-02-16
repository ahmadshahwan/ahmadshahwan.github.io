import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DegreeComponent} from './degree/degree.component';
import {Degree} from '../../model';
import {Observable, of} from 'rxjs';
import {PageStateService} from '../../services/page-state.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, DegreeComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  degrees: Observable<Degree[]> = of([]);

  constructor(
      private readonly pageStateService: PageStateService,
      private readonly apiClient: ContentService,
  ) {}

  ngOnInit() {
    this.pageStateService.updatePage('education');
    this.degrees = this.apiClient.fetch('degrees');
  }
}
