import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {Observable, of} from 'rxjs';
import {Header} from '../../../model';
import {LocaleService} from '../../../services/locale.service';
import {ContentRepositoryService} from '../../../services/content/content-repository.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  header: Observable<Header | undefined> = of(undefined);
  constructor(
    private readonly layoutService: ContentRepositoryService,
    private readonly localeService: LocaleService,
  ) {
  }

  ngOnInit(): void {
    this.localeService.changes.subscribe(
      () => this.header = this.layoutService.fetch()
    );
  }

  get locale(): 'en' | 'fr' | undefined {
    return this.localeService.current();
  }

  get switchLocaleLink(): string {
    return this.localeService.getSwitchLocaleLink();
  }
}
