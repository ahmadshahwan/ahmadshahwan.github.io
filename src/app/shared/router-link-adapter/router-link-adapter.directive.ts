import {Directive, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appRouterLinkAdapter]',
  standalone: true
})
export class RouterLinkAdapterDirective {

  constructor(
    private router: Router,
  ) { }

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    if (event.target instanceof HTMLAnchorElement) {
      const element = event.target;
      const href = element.getAttribute('href');
      if (href && element.target != '_blank') {
        event.preventDefault();
        const [command, fragment] = href.split('#');
        this.router.navigate([command], {fragment}).then();
      }
    }
  }
}
