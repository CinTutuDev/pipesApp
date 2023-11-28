import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Color, Hero } from '../../interfaces/hero.interfaces';
@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  /* items: MenuItem[] | undefined; */
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'CinTutuDev',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'SúperLolita',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'SúperChylu',
      canFly: false,
      color: Color.green,
    },
  ];
  constructor() {}

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

  ngOnInit() {
    /* this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ]; */
  }
}
