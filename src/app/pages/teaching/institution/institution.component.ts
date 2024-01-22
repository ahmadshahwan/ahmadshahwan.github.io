import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import Institute from '../../../model/institute';
import {TopicComponent} from '../topic/topic.component';

@Component({
  selector: 'app-institution',
  standalone: true,
  imports: [CommonModule, TopicComponent],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {

  @Input({required: true})
  model!: Institute;
}
