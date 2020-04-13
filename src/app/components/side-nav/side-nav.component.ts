import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isDarkMode = false;

  themeMap = {
    light: 'dark',
    dark: 'light'
  };

  tmp = Object.keys(this.themeMap)[0];
  theme = localStorage.getItem('theme') || (this.tmp, localStorage.setItem('theme', this.tmp), this.tmp);

  constructor() {
    document.body.classList.add(this.theme);
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = this.themeMap[current];
    document.body.classList.replace(current, next);
    localStorage.setItem('theme', next);

    if (current === 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }
}
