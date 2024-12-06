import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

const DEFAULT_LOCALE = 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private readonly currentLocale = signal<'en' | 'fr'>(DEFAULT_LOCALE);
  private readonly subject = new BehaviorSubject<'en' | 'fr'>(DEFAULT_LOCALE);

  public readonly current = this.currentLocale.asReadonly();
  public readonly changes = this.subject.asObservable();

  constructor(
    private readonly router: Router,
  ) { }

  setCurrent(locale: 'en' | 'fr') {
    this.currentLocale.set(locale);
    this.subject.next(locale);
  }

  localizedLink(link: string): string {
    const locale = this.current();
    const segment = link
      .replace(/^\.\//, '')
      .replace(/^\//, '');
    return segment ? `/${locale}/${segment}` : `/${locale}`;
  }

  getSwitchLocaleLink(): string {
    return this.getLocaleLink(this.current());
  }

  getLocaleLink(targetLocal: 'en' | 'fr'): string {
    const [currentUrl] = this.router.url.split('#');
    if (currentUrl === `/${this.current()}`) {
      return `/${targetLocal}`;
    }
    if (currentUrl.startsWith(`/${this.current()}/`)) {
      return currentUrl.replace(`/${this.current()}/`, `/${targetLocal}/`);
    }
    return `/${targetLocal}/${currentUrl}`;
  }
}
