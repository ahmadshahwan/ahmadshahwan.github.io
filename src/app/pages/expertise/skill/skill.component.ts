import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Skill} from '../../../model';
import {EntryComponent} from 'app/shared/entry/entry.component';

@Component({
  selector: 'app-skill',
  standalone: true,
    imports: [
        NgOptimizedImage,
        EntryComponent,
    ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  @Input({required: true})
  model!: Skill;
}
