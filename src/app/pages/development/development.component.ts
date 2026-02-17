import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Certificate} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {CertificateComponent} from './certificate/certificate.component';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-development',
  standalone: true,
  imports: [
    AsyncPipe,
    CertificateComponent
  ],
  templateUrl: './development.component.html',
  styleUrl: './development.component.scss'
})
export class DevelopmentComponent implements OnInit {

  certificates: Observable<Certificate[]> = of([]);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ContentService,
  ) {}

  ngOnInit() {
    this.pageStateService.updatePage('certificates');
    this.certificates = this.apiClient.fetch('certificates');
  }
}
