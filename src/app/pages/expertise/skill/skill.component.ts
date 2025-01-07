import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Skill} from '../../../model';

@Component({
  selector: 'app-skill',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  @Input({required: true})
  model!: Skill;

  get proficiencyAsPercentage() {
    return `${20 + this.model.proficiency * 75}%`;
  }

}
