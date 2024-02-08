import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LocaleService} from '../../services/locale.service';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
})
export class EnglishComponent implements OnInit {

  constructor(
    private readonly localeService: LocaleService,
  ) {
  }

  ngOnInit() {
    this.localeService.setCurrent('en');
  }
}
