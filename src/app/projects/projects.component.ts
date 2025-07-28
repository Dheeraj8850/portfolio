import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Furniture Shop Management System',
      description: 'An online platform for browsing and purchasing furniture with comprehensive management features.',
      features: [
        'User authentication and account management',
        'Shopping cart and checkout functionality',
        'Product categorization and inventory management',
        'Admin dashboard for store management'
      ],
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      bgClass: 'furniture-bg',
      icon: 'fas fa-couch',
    },
    {
      id: 2,
      name: 'EbillDisplay & E-commerce Website',
      description: 'A full-featured e-commerce platform with electronic billing display capabilities.',
      features: [
        'User-friendly interfaces built with Angular',
        'Backend services integrated with ASP.NET Web API',
        // 'Secure payment processing',
        'Dynamic content rendering and real-time updates',
        'Electronic billing and invoice management'
      ],
      technologies: ['Angular', 'ASP.NET Web API', 'TypeScript', 'SQL Server'],
      bgClass: 'ecommerce-bg',
      icon: 'fas fa-shopping-cart',
      sourceUrl:'https://github.com/Dheeraj8850/EBillDisplay'
    },
    {
      id: 3,
      name: 'Sudoku Solver',
      description: 'Interactive Sudoku puzzle solver with visualization of solving algorithms.',
      features: [
        'Multiple difficulty levels and puzzle generation',
        'Step-by-step solving visualization',
        'Real-time validation and hints',
        'Responsive design works on all devices'
      ],
      technologies: ['Html', 'JavaScript', 'Algorithms', 'CSS Grid'],
      bgClass: 'sudoku-bg',
      icon: 'fas fa-puzzle-piece',
      sourceUrl:'https://github.com/Dheeraj8850/Sudoku',
      demoUrl: 'https://sudoku-umber-omega.vercel.app/'
    },
  ];
}