import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular to showcase my work and skills.',
      github: 'https://github.com/ananya39/MyPortfolio'
    },
    {
      title: 'Docker NGINX Reverse Proxy',
      description: 'A simple project demonstrating how to set up multiple microservices behind an NGINX reverse proxy using Docker. Includes round-robin load balancing to switch requests between different service replicas. Great for learning container networking and basic DevOps concepts.',
      github: 'https://github.com/ananya39/NGINXReverseProxy-LB'
    },
    {
      title: 'Strapi-ci-cd',
      description: 'This project automates the deployment of a Strapi CMS application on AWS EC2 using Terraform for Infrastructure as Code (IaC). It includes a complete CI/CD pipeline to build, push, and deploy updates automatically. Ideal for learning modern DevOps practices with Terraform, GitHub Actions, and AWS.',
      github: 'https://github.com/ananya39/Strapi-ci-cd'
    },
    {
      title: 'EKS-Minikube',
      description: 'Simulated EKS-Style Secure Deployment Using Minikube.This project simulates a secure Kubernetes-based microservices environment using Minikube, modeled after real-world AWS EKS production practices. It includes a working gateway, internal-only services, MinIO as a mock S3 store, and full observability and security policies.',
      github: 'https://github.com/ananya39/EKS-Minikube-Task'
    }
  ];
} 