import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {

  @Input({required: true})
  title: string = '';
}
