import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuLinkComponent} from '../../menu-link/menu-link.component';
import {Link} from '../../../../model';


@Component({
  selector: 'app-side-bar-menu-item',
  standalone: true,
    imports: [CommonModule, MenuLinkComponent],
  templateUrl: './side-bar-menu-item.component.html',
  styleUrl: './side-bar-menu-item.component.scss'
})
export class SideBarMenuItemComponent {

  @Input({required: true})
  link!: Link;
}
