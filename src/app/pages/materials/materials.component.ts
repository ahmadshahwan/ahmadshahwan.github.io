import {Component, OnInit} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PageStateService} from '../../services/content/page-state.service';
import {Observable, of} from 'rxjs';
import Page from '../../model/page';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {

  page: Observable<Page | undefined> = of(undefined);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly viewportScroller: ViewportScroller,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.fragment
      .pipe(takeUntilDestroyed())
      .subscribe(fragment => fragment && this.viewportScroller.scrollToAnchor(fragment));
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('materials');
  }
}
