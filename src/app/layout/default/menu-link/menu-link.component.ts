import {booleanAttribute, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {LocaleService} from '../../../services/locale.service';

@Component({
  selector: 'app-menu-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-link.component.html',
  styleUrl: './menu-link.component.scss'
})
export class MenuLinkComponent {

  @Input({transform: booleanAttribute})
  doNotLocalize: boolean = false;

  @Input({transform: booleanAttribute})
  secondary: boolean = false;

  @Input({required: true})
  link: string = '';

  constructor(
    private readonly router: Router,
    private readonly localeService: LocaleService,
  ) {
  }

  get isEnabled(): boolean {
    return this.router.url !== this.route;
  }

  get route(): string {
    if (this.doNotLocalize) {
      return this.link;
    }
    return this.localeService.localizedLink(this.link);
  }

  get classes(): string[] {
    return this.secondary ? ['secondary'] : [];
  }
}
