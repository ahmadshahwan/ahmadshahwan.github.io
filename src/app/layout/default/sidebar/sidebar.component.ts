import {Component, OnInit, Signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {SideBarMenuItemComponent} from './side-bar-menu-item/side-bar-menu-item.component';
import {PageStateService} from '../../../services/content/page-state.service';
import {LayoutService} from '../../../services/content/layout.service';
import {Observable, of} from 'rxjs';
import {Sidebar, Link} from '../../../model';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, MenuLinkComponent, SideBarMenuItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {

  readonly links: Signal<Link[]>;
  readonly group: Signal<string>;
  sidebar: Observable<Sidebar | undefined> = of(undefined);
  constructor(
    private readonly layoutService: LayoutService,
    pageStateService: PageStateService,
  ) {
    this.links = pageStateService.links;
    this.group = pageStateService.pageGroup;
  }

  ngOnInit(): void {
    this.sidebar = this.layoutService.fetchSidebar();
  }
}
