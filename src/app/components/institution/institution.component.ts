import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-institution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {

  @Input({required: true})
  title: string = '';

  @Input()
  image?: string;

  @Input()
  alt?: string;
}
