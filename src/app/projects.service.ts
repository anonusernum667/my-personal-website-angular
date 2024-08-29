import { Injectable } from '@angular/core';
import { PROJECTS } from './projects-data';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  getProjects(): Project[] {
    return PROJECTS;
  }
}
