import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-content">
        <div class="row">
          <div class="col-lg-8 order-1 order-lg-1">
            <h2 class="about-title">About Me</h2>
            <div class="bio-section">
              <p class="lead">
                Hi! I'm Ananya Aggarwal, a DevOps enthusiast passionate about building and optimizing software delivery pipelines.
              </p>
              <p>
                I specialize in automating development workflows, implementing CI/CD pipelines, and managing cloud infrastructure. 
                My goal is to bridge the gap between development and operations to create efficient, scalable solutions.
              </p>
            </div>
          </div>
          <div class="col-lg-4 order-2 order-lg-2">
            <div class="profile-image-container">
              <img 
                src="assets/images/profile-pic.jpg" 
                alt="Ananya Aggarwal"
                class="profile-image"
                onError="this.src='https://via.placeholder.com/400x400?text=Ananya+Aggarwal'"
              >
            </div>
          </div>
        </div>
        
        <div class="row mt-4">
          <div class="col-12 order-3">
            <div class="what-i-do">
              <h3 class="what-i-do-title">What I Do</h3>
              <div class="skills-grid">
                <div class="skill-item">
                  <i class="bi bi-cloud-fill"></i>
                  <h4>Cloud Infrastructure</h4>
                  <p>AWS, Azure, Docker</p>
                </div>
                <div class="skill-item">
                  <i class="bi bi-gear-fill"></i>
                  <h4>Automation</h4>
                  <p>Jenkins, GitHub Actions</p>
                </div>
                <div class="skill-item">
                  <i class="bi bi-code-square"></i>
                  <h4>Development</h4>
                  <p>Python, Shell Scripting</p>
                </div>
                <div class="skill-item">
                  <i class="bi bi-diagram-3-fill"></i>
                  <h4>Infrastructure as Code</h4>
                  <p>Terraform, Ansible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem 1rem;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .about-content {
      padding: 1rem;
    }

    .about-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #008B8B;
    }

    .profile-image-container {
      position: relative;
      width: 100%;
      max-width: 350px;
      margin: 2rem auto;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .profile-image-container:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
    }

    .profile-image {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 15px;
      transition: transform 0.3s ease;
    }

    .profile-image-container:hover .profile-image {
      transform: scale(1.02);
    }

    .bio-section {
      margin-bottom: 2rem;
    }

    .lead {
      font-size: 1.25rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    p {
      color: #4a4a4a;
      line-height: 1.6;
    }

    .what-i-do {
      margin-top: 2rem;
      text-align: center;
    }

    .what-i-do-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #008B8B;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-top: 1rem;
      justify-items: center;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
      }
    }

    .skill-item {
      padding: 2.5rem;
      background: #f8f9fa;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      text-align: center;
      width: 100%;
      max-width: 350px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .skill-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .skill-item i {
      font-size: 3rem;
      color: #008B8B;
      margin-bottom: 1.5rem;
    }

    .skill-item h4 {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      color: #2c3e50;
    }

    .skill-item p {
      color: #6c757d;
      margin: 0;
      font-size: 1.1rem;
    }

    /* Dark mode styles */
    :host-context(.dark-mode) .about-container {
      background-color: #1f1f1f !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
    }

    :host-context(.dark-mode) .about-title,
    :host-context(.dark-mode) .what-i-do-title {
      color: #20B2AA !important;
    }

    :host-context(.dark-mode) .lead {
      color: #ffffff !important;
    }

    :host-context(.dark-mode) p {
      color: #ffffff !important;
    }

    :host-context(.dark-mode) .skill-item {
      background: #2a2a2a !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
    }

    :host-context(.dark-mode) .skill-item h4 {
      color: #ffffff !important;
    }

    :host-context(.dark-mode) .skill-item p {
      color: #ffffff !important;
    }

    :host-context(.dark-mode) .skill-item i {
      color: #20B2AA !important;
    }

    @media (max-width: 992px) {
      .about-container {
        margin: 1rem;
      }

      .profile-image-container {
        margin: 1rem auto 2rem;
      }

      .about-title, .what-i-do-title {
        font-size: 2rem;
        margin-bottom: 1.25rem;
      }
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1.5rem 1rem;
      }

      .about-content {
        padding: 0.5rem;
      }

      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }

      .skill-item {
        padding: 2rem;
        min-height: 180px;
      }

      .lead {
        font-size: 1.15rem;
      }

      .what-i-do-title {
        font-size: 1.5rem;
        margin-bottom: 1.25rem;
      }

      .profile-image-container {
        max-width: 280px;
        margin: 1rem auto;
      }
    }
  `]
})
export class AboutComponent {} 