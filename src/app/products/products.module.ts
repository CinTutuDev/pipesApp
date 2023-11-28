import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';

import { canFlyPipe } from './pipes/can-fly.pipe';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SortByPipe } from './pipes/sortBy.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPagesComponent,
    OrderComponent,
    UncommonPagesComponent,
    //Pipe
    canFlyPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
