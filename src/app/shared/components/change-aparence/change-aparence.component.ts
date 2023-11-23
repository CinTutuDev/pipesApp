import { Component, Inject, OnInit  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-change-aparence',
  templateUrl: './change-aparence.component.html',
  styles: [],
})
export class ChangeAparenceComponent {

  themeSelection: boolean = false;

  constructor(

    @Inject(DOCUMENT) private document: Document
  ) {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      this.themeSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themeSelection);
    }
  }

  changeTheme(state: boolean) {
    const theme = state ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue' + '.css';
  }

}
