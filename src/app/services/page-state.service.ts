import {Injectable, signal} from '@angular/core';
import {Link, Page} from '../model';
import {Meta, Title} from '@angular/platform-browser';
import {map, Observable} from 'rxjs';
import {ContentService} from './content.service';

const TITLE_SUFFIX = 'Ahmad SHAHWAN';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {

  private readonly currentLinks = signal<Link[]>([]);
  private readonly currentPageGroup = signal<string>('');
  private readonly currentPage = signal<Page | null>(null);

  public readonly links = this.currentLinks.asReadonly();
  public readonly pageGroup = this.currentPageGroup.asReadonly();
  public readonly page = this.currentPage.asReadonly();

  constructor(
    private readonly apiClient: ContentService,
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
      this.currentPage.set(page);
      return page;
    };
    const result = this.apiClient.fetch('pages', slug).pipe(
      map(handlePage),
    );
    result.subscribe();
    return result;
  }
}
