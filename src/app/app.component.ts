import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    // Check if user previously selected dark mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    // Save user preference
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
}
