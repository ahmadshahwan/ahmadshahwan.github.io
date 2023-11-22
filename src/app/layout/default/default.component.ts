import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {

}
