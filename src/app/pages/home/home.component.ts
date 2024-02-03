import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('home');
  }
}
