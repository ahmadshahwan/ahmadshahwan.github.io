import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ScrollableComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}
