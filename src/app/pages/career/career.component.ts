import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from '../../components/experience/experience.component';
import {DegreeComponent} from '../../components/degree/degree.component';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';
import {ExperienceRepositoryService} from '../../services/career/experience-repository.service';
import {Experience} from '../../model/experience';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, DegreeComponent, ScrollableComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit {

  experiences: Observable<Experience[]> = of([]);

  constructor(
    private repository: ExperienceRepositoryService,
  ) { }

  ngOnInit(): void {
    this.experiences = this.repository.fetchAll();
  }
}
