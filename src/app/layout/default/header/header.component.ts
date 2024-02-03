import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {LinkRepositoryService} from '../../../services/content/link-repository.service';
import {Observable} from 'rxjs';
import Link from '../../../model/link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  readonly links: Observable<Link[]>;
  constructor(
    repository: LinkRepositoryService,
  ) {
    this.links = repository.fetchByLabel(['main']);
  }
}
