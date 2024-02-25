import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {Observable, of} from 'rxjs';
import {LayoutService} from '../../../services/content/layout.service';
import {Header} from '../../../model';
import {LocaleService} from '../../../services/locale.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  header: Observable<Header | undefined> = of(undefined);
  constructor(
    private readonly layoutService: LayoutService,
    private readonly localeService: LocaleService,
  ) {
  }

  ngOnInit(): void {
    this.localeService.changes.subscribe(
      () => this.header = this.layoutService.fetchHeader()
    );
  }

  get locale(): 'en' | 'fr' | undefined {
    return this.localeService.current();
  }

  get switchLocaleLink(): string {
    return this.localeService.getSwitchLocaleLink();
  }
}
