import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="hero-container">
      <div class="hero-content">
        <h1>Hi, I'm Ananya Aggarwal</h1>
        <p class="subheading">Passionate about DevOps</p>
        <div class="cta-buttons">
          <a routerLink="/about" class="btn btn-primary">Learn More</a>
          <a routerLink="/contact" class="btn btn-outline">Get in Touch</a>
          <button (click)="downloadResume()" class="btn btn-secondary">Download Resume</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-container {
      min-height: calc(100vh - 70px); /* Adjust for navbar height */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem;
      background-color: #ffffff;
    }

    .hero-content {
      max-width: 800px;
      width: 100%;
      animation: fadeIn 0.8s ease-out;
      padding: 0 1rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h1 {
      font-family: 'Inter', sans-serif;
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #2c3e50;
      line-height: 1.1;
    }

    .subheading {
      font-family: 'Inter', sans-serif;
      font-size: 1.75rem;
      font-weight: 400;
      color: #666;
      margin: 0 0 2.5rem 0;
      line-height: 1.4;
    }

    .cta-buttons {
      display: flex;
      gap: 1.25rem;
      justify-content: center;
      margin-top: 2.5rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
      min-width: 180px;
    }

    .btn-primary {
      background-color: #008B8B;
      color: white;
      border: 2px solid #008B8B;
    }

    .btn-primary:hover {
      background-color: #006666;
      border-color: #006666;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 139, 139, 0.2);
    }

    .btn-outline {
      background-color: transparent;
      color: #008B8B;
      border: 2px solid #008B8B;
    }

    .btn-outline:hover {
      background-color: rgba(0, 139, 139, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 139, 139, 0.1);
    }

    .btn-secondary {
      background-color: #008B8B;
      color: white;
      border: 2px solid #008B8B;
    }

    .btn-secondary:hover {
      background-color: #006666;
      border-color: #006666;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 139, 139, 0.2);
    }

    /* Dark mode styles */
    :host-context(.dark-mode) {
      .hero-container {
        background-color: #1f1f1f;
      }

      h1 {
        color: #ffffff;
      }

      .subheading {
        color: #b0b0b0;
      }

      .btn-primary {
        background-color: #20B2AA;
        border-color: #20B2AA;
      }

      .btn-primary:hover {
        background-color: #1a8f89;
        border-color: #1a8f89;
      }

      .btn-outline {
        color: #20B2AA;
        border-color: #20B2AA;
      }

      .btn-outline:hover {
        background-color: rgba(32, 178, 170, 0.1);
      }

      .btn-secondary {
        background-color: #20B2AA;
        border-color: #20B2AA;
      }

      .btn-secondary:hover {
        background-color: #1a8f89;
        border-color: #1a8f89;
      }
    }

    /* Tablet styles */
    @media (max-width: 1024px) {
      .hero-container {
        padding: 2rem;
      }

      h1 {
        font-size: 3.5rem;
      }

      .subheading {
        font-size: 1.5rem;
        margin: 0 0 2rem 0;
      }

      .btn {
        padding: 0.875rem 1.75rem;
        font-size: 1.1rem;
        min-width: 160px;
      }
    }

    /* Mobile styles */
    @media (max-width: 768px) {
      .hero-container {
        padding: 1.5rem 1rem;
        min-height: calc(100vh - 60px); /* Adjusted for smaller navbar */
      }

      .hero-content {
        padding: 0;
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .subheading {
        font-size: 1.25rem;
        margin: 0 0 1.5rem 0;
        padding: 0 0.5rem;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        padding: 0 1rem;
      }

      .btn {
        width: 100%;
        padding: 1rem 1.5rem;
        font-size: 1.1rem;
        min-width: unset;
      }
    }

    /* Small mobile styles */
    @media (max-width: 360px) {
      h1 {
        font-size: 2rem;
      }

      .subheading {
        font-size: 1.1rem;
      }

      .btn {
        padding: 0.875rem 1.25rem;
        font-size: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/images/AnanyaAggarwal new (6).pdf';
    link.download = 'Ananya_Aggarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
} 