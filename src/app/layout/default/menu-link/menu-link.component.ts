import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.scss'
})
export class MenuLinkComponent {

  constructor(
    private router: Router
  ) {
  }

  @Input({required: true})
  link: string = '';

  get isEnabled(): boolean {
    return this.router.url !== this.link;
  }
}
