import {Injectable, signal} from '@angular/core';
import {Link, Page} from '../model';
import {Meta, Title} from '@angular/platform-browser';
import {map, Observable} from 'rxjs';
import {ApiClientService} from './api-client.service';

const TITLE_SUFFIX = 'Ahmad SHAHWAN';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {

  private readonly currentLinks = signal<Link[]>([]);
  private readonly currentPageGroup = signal<string>('');

  public readonly links = this.currentLinks.asReadonly();
  public readonly pageGroup = this.currentPageGroup.asReadonly();

  constructor(
    private readonly apiClient: ApiClientService,
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  updatePage(slug: string): Observable<Page> {
    const handlePage = (page: Page | undefined) => {
      if (!page) {
        throw new Error(`Page with slug ${slug} not found`);
      }
      this.title.setTitle(`${TITLE_SUFFIX} | ${page.title}`);
      this.meta.updateTag({name: 'description', content: page.description});
      this.currentPageGroup.set(page.group.title);
      this.currentLinks.set(page.group.links);
      return page;
    };
    return this.apiClient.fetch('pages', slug).pipe(
      map(handlePage),
    );
  }
}
