import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.scss'],
})
export class BasicsPagesComponent {
  public nameLower: string = 'cintutuudev';
  public nameUpper: string = 'CINTUTUDEV';
  public fullName: string = 'CinTutuDev';
  public customDate: Date = new Date();
}
