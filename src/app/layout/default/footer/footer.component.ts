import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
