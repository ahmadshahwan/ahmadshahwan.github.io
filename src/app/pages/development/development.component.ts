import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Certificate, Page} from '../../model';
import {PageStateService} from '../../services/page-state.service';
import {CertificateComponent} from './certificate/certificate.component';
import {ApiClientService} from '../../services/api-client.service';

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
  page: Observable<Page> = of();

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly apiClient: ApiClientService,
  ) {}

  ngOnInit() {
    this.page = this.pageStateService.updatePage('certificates');
    this.certificates = this.apiClient.fetch('certificates');
  }
}
