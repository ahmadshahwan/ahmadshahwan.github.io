import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from '../../components/experience/experience.component';
import {DegreeComponent} from '../../components/degree/degree.component';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, DegreeComponent, ScrollableComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {

}
