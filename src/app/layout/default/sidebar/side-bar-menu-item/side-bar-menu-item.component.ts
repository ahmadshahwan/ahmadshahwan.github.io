import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuLinkComponent} from '../../menu-link/menu-link.component';

@Component({
  selector: 'app-side-bar-menu-item',
  standalone: true,
    imports: [CommonModule, MenuLinkComponent],
  templateUrl: './side-bar-menu-item.component.html',
  styleUrl: './side-bar-menu-item.component.scss'
})
export class SideBarMenuItemComponent {

  @Input({required: true})
  link!: {name: string, url: string};

  @Input()
  linksList!: {name: string, url: string}[];

  @Input({required: true})
  parent!: HTMLElement;

  public toggleActive(element: HTMLElement): void {
    console.log(this.parent);
    this.parent.querySelectorAll('ul.menu li')
      .forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

}
