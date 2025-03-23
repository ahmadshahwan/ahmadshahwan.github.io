import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {Observable, of} from 'rxjs';
import {Website} from '../../../model';
import {LocaleService} from '../../../services/locale.service';
import {ApiClientService} from '../../../services/api-client.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  header: Observable<Website> = of();
  constructor(
    private readonly apiClient: ApiClientService,
    private readonly localeService: LocaleService,
  ) {}

  ngOnInit(): void {
    this.localeService.changes.subscribe(
      () => this.header = this.apiClient.fetch()
    );
  }
}
