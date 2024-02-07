import {Injectable, signal} from '@angular/core';
import Link from '../../model/link';
import {PageRepositoryService} from './page-repository.service';
import {Title} from '@angular/platform-browser';
import Page from '../../model/page';
import {Observable} from 'rxjs';

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
    private readonly pageRepository: PageRepositoryService,
    private readonly title: Title,
  ) {
  }

  updatePage(slug: string): Observable<Page> {
    const pageObservable = this.pageRepository.fetchBySlug(slug);
    pageObservable
      .subscribe(page => {
        this.title.setTitle(`${TITLE_SUFFIX} | ${page.title}`);
        this.currentPageGroup.set(page.group.title);
        this.currentLinks.set(page.links);
      });
    return pageObservable;
  }
}
