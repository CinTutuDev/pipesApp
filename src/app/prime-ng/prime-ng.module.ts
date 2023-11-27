import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
/* import { MenuModule } from 'primeng/menu'; */
/* import { MegaMenuModule } from 'primeng/megamenu'; */
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  exports: [
    /* MenuModule */ MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule
  ],
})
export class PrimeNgModule {}
