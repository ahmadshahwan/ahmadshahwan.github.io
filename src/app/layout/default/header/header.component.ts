import {Component, computed, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link, Page, Website} from 'app/model';
import {ContentService} from 'app/services/content.service';
import {PageStateService} from 'app/services/page-state.service';
import {Router, RouterLink} from "@angular/router";
import {MenuLinkComponent} from "app/layout/default/menu-link/menu-link.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  readonly header: Signal<Website | undefined>;
  readonly page: Signal<Page | null>;
  readonly links: Signal<Link[]>;

  constructor(
    router: Router,
    contentService: ContentService,
    pageStateService: PageStateService,
  ) {
    this.header = contentService.content;
    this.page = pageStateService.page;
    this.links = computed(() => pageStateService.links().filter(({route}) => router.url !== route));
  }
}
