import {Injectable, signal} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private readonly currentLocale = signal<'en' | 'fr' | undefined>(undefined);
  private readonly subject = new ReplaySubject<'en' | 'fr'>();

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
    const targetLocal = this.current() === 'en' ? 'fr' : 'en';
    return this.getLocaleLink(targetLocal);
  }

  getLocaleLink(targetLocal: 'en' | 'fr'): string {
    const [currentUrl] = this.router.url.split('#');
    if (currentUrl === `/${this.current()}`) {
      return `/${targetLocal}`;
    }
    if (currentUrl.startsWith(`/${this.current()}/`)) {
      return currentUrl.replace(`/${this.current()}/`, `/${targetLocal}/`);
    }
    //const fragmentPart = fragment ? `#${fragment}` : '';
    return `/${targetLocal}/${currentUrl}`;
  }
}
