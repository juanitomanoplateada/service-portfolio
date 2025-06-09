import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements OnInit {
  panels = [false, false, false];

  ngOnInit(): void {
    this.revealPanels();
  }

  revealPanels(): void {
    this.panels.forEach((_, i) => {
      setTimeout(() => {
        this.panels[i] = true;
      }, (i + 1) * 750);
    });
  }

  togglePanel(index: number): void {
    this.panels[index] = !this.panels[index];
  }
}
