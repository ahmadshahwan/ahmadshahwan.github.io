import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-scrollable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrollable.component.html',
  styleUrl: './scrollable.component.scss',
})
export class ScrollableComponent {

  @Input()
  maxHeight: string = '350px';

  get scrollableStyle() {
    return {
      maxHeight: this.maxHeight,
    };
  }

}
