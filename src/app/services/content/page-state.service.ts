import {Injectable, signal} from '@angular/core';
import Link from '../../model/link';
import {PageRepositoryService} from './page-repository.service';
import {Title} from '@angular/platform-browser';

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
    console.log('in constructor this', this);
    console.log('in constructor', this.currentLinks);
  }

  updatePage(slug: string) {
    this.pageRepository.fetchBySlug(slug).subscribe(({title, links}) => {
      this.title.setTitle(title);
      this.currentLinks.set(links);
    });
  }
}
