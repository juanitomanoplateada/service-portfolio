import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  codecExpanded: boolean = false;
  showIncoming: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.codecExpanded = true;
      this.showIncoming = false;
    }, 1500);
  }

  expandCodec(): void {
    this.codecExpanded = true;
    this.showIncoming = false;
  }
}
