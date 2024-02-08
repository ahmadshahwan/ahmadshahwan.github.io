import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Degree} from '../../../model';

@Component({
  selector: 'app-degree',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './degree.component.html',
  styleUrl: './degree.component.scss',
})
export class DegreeComponent {

  @Input({required: true})
  model!: Degree;
}
