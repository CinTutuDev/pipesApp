import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
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
    ];
  }
}
