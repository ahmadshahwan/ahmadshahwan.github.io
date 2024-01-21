import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import Event from '../../../model/event';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  @Input({required: true})
  model!: Event;

}
