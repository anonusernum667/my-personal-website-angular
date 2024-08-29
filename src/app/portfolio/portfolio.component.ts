import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ShuffleobjectsPipe } from '../pipes/shuffleobjects.pipe';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ShuffleobjectsPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: Project[] = [];
  constructor(private projectservice: ProjectsService){}
  ngOnInit(){
    this.projects = this.projectservice.getProjects();
  }

}
