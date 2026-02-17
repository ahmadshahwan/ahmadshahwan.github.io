import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Degree} from '../../../model';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-degree',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, EntryComponent],
  templateUrl: './degree.component.html',
  styleUrl: './degree.component.scss',
})
export class DegreeComponent {

  @Input({required: true})
  model!: Degree;
}
