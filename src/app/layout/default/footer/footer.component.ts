import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Website} from '../../../model';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  footer: Observable<Website> = of();

  constructor(
    private readonly apiClient: ContentService,
  ) {}

  ngOnInit(): void {
    this.footer = this.apiClient.fetch();
  }
}
