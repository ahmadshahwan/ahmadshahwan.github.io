import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Experience} from '../../model/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {

  @Input({required: true})
  model!: Experience;

  moreHidden = true;

  toggleMore() {
    return this.moreHidden = !this.moreHidden;
  }
}
