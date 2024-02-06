import {Injectable, signal} from '@angular/core';
import Link from '../../model/link';
import {PageRepositoryService} from './page-repository.service';
import {Title} from '@angular/platform-browser';
import Page from '../../model/page';

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

  updatePage(slug: string) {
    this.pageRepository.fetchBySlug(slug).subscribe((page: Page) => {
      this.title.setTitle(`${TITLE_SUFFIX} | ${page.title}`);
      this.currentPageGroup.set(page.group.title);
      this.currentLinks.set(page.links);
    });
  }
}
