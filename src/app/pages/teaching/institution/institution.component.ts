import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Institute} from '../../../model';
import {TopicComponent} from '../topic/topic.component';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-institution',
  standalone: true,
  imports: [CommonModule, TopicComponent, EntryComponent],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {

  @Input({required: true})
  model!: Institute;
}
