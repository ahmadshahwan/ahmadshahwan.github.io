import {Injectable, signal} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private readonly currentLocale = signal<'en' | 'fr' | undefined>(undefined);
  private readonly subject = new ReplaySubject<'en' | 'fr'>();

  public readonly current = this.currentLocale.asReadonly();
  public readonly changes = this.subject.asObservable();

  constructor() { }

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
}
