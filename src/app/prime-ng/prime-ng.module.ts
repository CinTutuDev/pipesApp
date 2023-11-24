import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
/* import { MegaMenuModule } from 'primeng/megamenu'; */
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  exports: [MenuModule, MenubarModule],
})
export class PrimeNgModule {}
