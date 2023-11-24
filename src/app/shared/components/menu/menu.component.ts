import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  /* public manuItems: MegaMenuItem[] | undefined; */
  public manuItems: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
    this.manuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-fw pi-align-left',
           /*  items: [
              {
                label: 'Números',
                icon: 'pi pi-dollar',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ], */
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar',
          },
        /*   {
            separator: true,
          }, */
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-eye',
          },
        ],
      },
      {
        label: 'Pipes presonalizados',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-spin pi-cog',
          },
         /*  {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          }, */
        ],
      },
  /*     {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      }, */
    ];



  }
}
