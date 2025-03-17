import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Certificate} from '../../../model';

@Component({
  selector: 'app-certificate',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {

  @Input({required: true})
  model!: Certificate;
}
