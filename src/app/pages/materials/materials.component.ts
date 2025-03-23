import {Component, OnInit} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PageStateService} from '../../services/page-state.service';
import {map, Observable, of} from 'rxjs';
import {Class, Page} from '../../model';
import {ApiClientService} from '../../services/api-client.service';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {

  page: Observable<Page> = of();
  classes: Observable<Class[]> = of([]);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ApiClientService,
    private readonly viewportScroller: ViewportScroller,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.fragment
      .pipe(takeUntilDestroyed())
      .subscribe(fragment => fragment && this.viewportScroller.scrollToAnchor(fragment));
  }

  ngOnInit(): void {
    this.page = this.pageStateService.updatePage('materials');
    this.classes = this.apiClient.fetch('institutes').pipe(
      map(institutes => institutes
        .flatMap(({classes}) => classes)
        .filter(({syllabi}) => syllabi?.length)
      ),
    );
  }
}
