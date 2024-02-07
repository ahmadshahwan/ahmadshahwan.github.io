import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Observable, of} from 'rxjs';
import {LayoutService} from '../../../services/content/layout.service';
import Footer from '../../../model/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  footer: Observable<Footer | undefined> = of(undefined);

  constructor(
    private readonly layoutService: LayoutService,
  ) {
  }

  ngOnInit(): void {
    this.footer = this.layoutService.fetchFooter();
  }
}
