import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/edwin-steven-ni%C3%B1o-torres-292b01282', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/juanitomanoplateada', '_blank');
  }

  sendEmail() {
    window.location.href = 'mailto:edwinnino.dev@gmail.com';
  }
}
