import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.scss'],
})
export class UncommonPagesComponent {
  //i18n Select
  public name: string = 'CinTutuDev';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Daniel';
    this.gender = 'male';
  }

  //i18nPlural

  public clients: string[] = [
    'Daienl',
    'CCristina',
    'Pepe',
    'Lola',
    'Agustin',
    'Jeusus',
    'Maria',
    'Soledad',
    'Cinat',
  ];
  public clientsMap = {
    '=0': ' No tenemos ningún cliente esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos dos cliente esperando',
    other: ' tenemos # clientes esperando.',
  };
  deletClient(): void {
    this.clients.shift();
  }

  //KeyValuePipe
  public person = {
    name: ' CinTutuDev',
    age:' 42',
    address: ' Vigo, España',
  };
}
