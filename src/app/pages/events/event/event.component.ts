import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Event} from '../../../model';
import {RouterLinkAdapterDirective} from '../../../shared/router-link-adapter/router-link-adapter.directive';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterLinkAdapterDirective, EntryComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  @Input({required: true})
  model!: Event;

}
