import {Component, OnInit} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit {

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
    this.pageStateService.updatePage('materials');
  }
}
