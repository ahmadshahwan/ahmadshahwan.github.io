import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DegreeComponent} from '../../components/degree/degree.component';
import {ExperienceComponent} from '../../components/experience/experience.component';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';
import {DegreeRepositoryService} from '../../services/eductation/degree-repository.service';
import {Degree} from '../../model/degree';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, DegreeComponent, ExperienceComponent, ScrollableComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  degrees: Degree[] = [];

  constructor(
      private repository: DegreeRepositoryService,
  ) {
  }

  ngOnInit() {
    this.repository.fetchAll()
        .subscribe(degrees => {
          this.degrees = degrees;
        });
  }
}
