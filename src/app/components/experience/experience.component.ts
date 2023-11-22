import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {

  @Input({required: true})
  name: string = '';

  @Input()
  image = '/assets/images/career/digamma.png';

  moreHidden = true;

  toggleMore() {
    return this.moreHidden = !this.moreHidden;
  }
}
