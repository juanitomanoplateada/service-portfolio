import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit {
  showPanel = false;
  showItems = false;

  contactItems = [
    { label: 'Email', value: 'edwinnino2404@gmail.com' },
    {
      label: 'LinkedIn',
      value:
        'https://www.linkedin.com/in/edwin-steven-ni%C3%B1o-torres-292b01282/',
    },
    { label: 'GitHub', value: 'https://github.com/juanitomanoplateada' },
    { label: 'Location', value: 'Boyacá, Colombia' },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.showPanel = true;
      setTimeout(() => {
        this.showItems = true;
      }, 1000);
    }, 1750);
  }
  isLink(value: string): boolean {
    return value.startsWith('http');
  }
}
