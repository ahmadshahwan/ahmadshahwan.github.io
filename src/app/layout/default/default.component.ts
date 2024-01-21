import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {

}
