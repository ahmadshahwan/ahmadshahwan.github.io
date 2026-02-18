import {Component, computed, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link, Page, Website} from 'app/model';
import {ContentService} from 'app/services/content.service';
import {PageStateService} from 'app/services/page-state.service';
import {Router, RouterLink} from "@angular/router";
import {MenuLinkComponent} from "app/layout/default/menu-link/menu-link.component";
import { LocaleService } from 'app/services/locale.service';

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
    contentService: ContentService,
    pageStateService: PageStateService,
    private router: Router,
    private localeService: LocaleService,
  ) {
    this.header = contentService.content;
    this.page = pageStateService.page;
    this.links = pageStateService.links;
  }

  isCurrentRoute(route: string): boolean {
    const localizedRoute = this.localeService.localizedLink(route);
    return this.router.url === localizedRoute;
  }

  get otherLocale(): Signal<'en' | 'fr'> {
    return computed(() => this.localeService.current() === 'en' ? 'fr' : 'en');
  }

  get switchLocaleLink(): string {
    return this.localeService.getLocaleLink(this.otherLocale());
  }
}
