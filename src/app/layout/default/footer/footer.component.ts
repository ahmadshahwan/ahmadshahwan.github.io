import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Website} from '../../../model';
import {ContentRepositoryService} from '../../../services/content/content-repository.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  footer: Observable<Website | undefined> = of(undefined);

  constructor(
    private readonly layoutService: ContentRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.footer = this.layoutService.fetch();
  }
}
