import {Injectable, signal} from '@angular/core';
import Link from '../../model/link';
import {PageRepositoryService} from './page-repository.service';
import {Title} from '@angular/platform-browser';

const TITLE_SUFFIX = 'Ahmad SHAHWAN';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {

  private readonly currentLinks = signal<Link[]>([]);
  public readonly links = this.currentLinks.asReadonly();
  constructor(
    private readonly pageRepository: PageRepositoryService,
    private readonly title: Title,
  ) {
  }

  updatePage(slug: string) {
    this.pageRepository.fetchBySlug(slug).subscribe(({title, links}) => {
      this.title.setTitle(`${TITLE_SUFFIX} | ${title}`);
      this.currentLinks.set(links);
    });
  }
}
