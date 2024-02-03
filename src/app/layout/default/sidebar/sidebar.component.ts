import {Component, Signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {SideBarMenuItemComponent} from './side-bar-menu-item/side-bar-menu-item.component';
import Link from '../../../model/link';
import {PageStateService} from '../../../services/content/page-state.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, MenuLinkComponent, SideBarMenuItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  readonly links: Signal<Link[]>;
  constructor(
    linkStateService: PageStateService,
  ) {
    this.links = linkStateService.links;
  }
}
