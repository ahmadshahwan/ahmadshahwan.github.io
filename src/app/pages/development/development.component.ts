import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {Certificate, Page} from '../../model';
import {PageStateService} from '../../services/content/page-state.service';
import {CertificatesRepositoryService} from '../../services/development/certificates-repository.service';
import {CertificateComponent} from './certificate/certificate.component';

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
  page: Observable<Page | undefined> = of(undefined);

  constructor(
    private readonly pageStateService: PageStateService,
    private readonly repository: CertificatesRepositoryService,
  ) {

  }

  ngOnInit() {
    this.page = this.pageStateService.updatePage('certificates');
    this.certificates = this.repository.fetchAll();
  }
}
