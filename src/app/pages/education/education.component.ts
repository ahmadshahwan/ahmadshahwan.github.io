import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DegreeComponent} from '../../components/degree/degree.component';
import {ExperienceComponent} from '../../components/experience/experience.component';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, DegreeComponent, ExperienceComponent, ScrollableComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

}
