import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(
    private viewportScroller: ViewportScroller,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.fragment
        .subscribe(fragment => fragment && this.viewportScroller.scrollToAnchor(fragment))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
