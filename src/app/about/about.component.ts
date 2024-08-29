import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShuffleobjectsPipe } from '../pipes/shuffleobjects.pipe';
import { ShPipe } from '../sh.pipe';
interface TechSkills {
  frontend: string[];
  programming: string[];
  systemTools: string[];
  additionalSkills: string[];
}


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule, ShuffleobjectsPipe, ShPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  Techskills: TechSkills = {
    frontend: [
      'HTML5',
      'CSS3',
      'SASS',
      'Tailwinds Css',
      'Bootstrap',
      'JavaScript',
      'TypeScript',
      'Angular framework',
      'Angular Cli',
      'NgRx',
      'Figma',
      'APIs and Services'
    ],
    programming: [
      'Python'
    ],
    systemTools: [
      'Git',
      'GitHub',
      'Google Cloud',
      'Command Line'
    ],
    additionalSkills: [
      '',
      '',
      ''
    ]
  };
  colors = {
    color: [
      "bg-teal-600",
      "bg-lime-600",
      "bg-green-600",
      "bg-fuchsia-600",
      "bg-neutral-600",
      "bg-indigo-500"
    ]
  };
}
