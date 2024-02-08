import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {LocaleService} from '../../services/locale.service';

@Directive({
  selector: '[appRouterLinkAdapter]',
  standalone: true
})
export class RouterLinkAdapterDirective {

  constructor(
    private readonly router: Router,
    private readonly localeService: LocaleService,
  ) { }

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    if (event.target instanceof HTMLAnchorElement) {
      const element = event.target;
      const href = element.getAttribute('href');
      if (href && element.target != '_blank') {
        event.preventDefault();
        const [command, fragment] = href.split('#');
        const localizedCommand = this.localeService.localizedLink(command);
        this.router.navigate([localizedCommand], {fragment}).then();
      }
    }
  }
}
