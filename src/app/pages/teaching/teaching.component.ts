import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../shared/scrollable/scrollable.component';
import {TopicComponent} from './topic/topic.component';
import {InstitutionComponent} from './institution/institution.component';

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [CommonModule, ScrollableComponent, TopicComponent, InstitutionComponent],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {

}
