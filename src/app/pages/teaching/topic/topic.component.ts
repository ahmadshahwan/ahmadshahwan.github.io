import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import Class from '../../../model/class';
import {RouterLinkAdapterDirective} from '../../../shared/router-link-adapter/router-link-adapter.directive';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, RouterLinkAdapterDirective],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {

  @Input({required: true})
  model!: Class;
}
