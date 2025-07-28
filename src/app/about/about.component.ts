import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

// Define interfaces for our data structures
interface EducationItem {
  heading: string;
  subheading: string;
  detail: string;
}

interface SkillItem {
  detail: string;
}

interface StrengthItem {
  detail: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  careerObjective = `Motivated and quick-learning individual with practical experience in data analysis,
  medical billing, and software development. Seeking a full-time opportunity as a Software Engineer
  to contribute effectively while advancing my skills and growing with the organization.`;

  // Create strongly typed arrays
  educationItems: EducationItem[] = [
    {
      heading: 'B.Sc. IT: Mumbai University',
      subheading: 'SIES College of Commerce & Economics, Sion Mumbai',
      detail: 'CGPA: 8.47'
    },
    {
      heading: 'HSC – Science',
      subheading: 'Vidyalankar Junior College, Mumbai',
      detail: 'Percentage: 69.23%'
    },
    {
      heading: 'SSC',
      subheading: 'Powai Municipal English School',
      detail: 'Percentage: 64.60%'
    }
  ];

  technicalSkills: SkillItem[] = [
    { detail: 'Pythonq' },
    { detail: 'C#' },
    { detail: 'JavaScript' },
    { detail: 'HTML' },
    { detail: 'CSS' },
    { detail: 'Bootstrap' },
    { detail: 'Angular' },
    { detail: 'ASP.NET Web API' },
    { detail: 'MySQL' }
  ];

  strengths: StrengthItem[] = [
    { detail: 'Logical thinking and problem-solving' },
    { detail: 'Effective communication' },
    { detail: 'Fast learner and team player' },
    { detail: 'Ability to work under pressure' }
  ];

  currentYear: number = new Date().getFullYear();
}