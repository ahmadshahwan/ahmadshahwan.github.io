import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageStateService} from '../../services/content/page-state.service';

@Component({
  selector: 'app-phd-defense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phd-defense.component.html',
  styleUrl: './phd-defense.component.scss'
})
export class PhdDefenseComponent implements OnInit {

  constructor(
    private readonly pageStateService: PageStateService,
  ) {
  }

  ngOnInit(): void {
    this.pageStateService.updatePage('defense');
  }
}
