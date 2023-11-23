import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'CinTutuDev maxima';
  themeSelection: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    /* @Inject(DOCUMENT) private document: Document */
  ) {
    /* const theme = window.localStorage.getItem('theme');
    if (theme) {
      this.themeSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themeSelection);
    } */
  }

  /* changeTheme(state: boolean) {
    const theme = state ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue' + '.css';
  } */

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
