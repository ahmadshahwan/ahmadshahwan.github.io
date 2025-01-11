import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Skill} from '../../../model';
import {NgClass} from '@angular/common';

const MAX_WIDTH = 100;
const MAX_FONT_SIZE = 32;

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  @Input({required: true})
  model!: Skill;

  @ViewChild('title')
  title!: ElementRef<HTMLElement>;

  inFocus = false;

  get width() {
    return `${this.model.proficiency * MAX_WIDTH}px`;
  }

  get fontSize() {
    return `${this.model.proficiency * MAX_FONT_SIZE}px`;
  }

}
