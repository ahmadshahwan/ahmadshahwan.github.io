import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LocaleService} from '../../services/locale.service';

@Component({
  selector: 'app-french',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
})
export class FrenchComponent implements OnInit {

  constructor(
    private readonly localeService: LocaleService,
  ) {
  }

  ngOnInit() {
    this.localeService.setCurrent('fr');
  }
}
