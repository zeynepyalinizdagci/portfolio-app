import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./pages/profile/profile.component";
import { WorkExperienceComponent } from "./pages/work-experience/work-experience.component";
import { EducationComponent } from "./pages/education/education.component";
import { ServicesComponent } from "./pages/services/services.component";
import { SkillsComponent } from "./pages/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, WorkExperienceComponent, EducationComponent, ServicesComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
