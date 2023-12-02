import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollableComponent} from '../../components/scrollable/scrollable.component';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, ScrollableComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {

}
