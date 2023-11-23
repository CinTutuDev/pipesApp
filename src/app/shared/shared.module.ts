import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ChangeAparenceComponent } from './components/change-aparence/change-aparence.component';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
@NgModule({
  declarations: [MenuComponent, ChangeAparenceComponent, ChangeAparenceComponent],
  imports: [CommonModule, PrimeNgModule,  ButtonModule, InputSwitchModule, FormsModule, MegaMenuModule],
  exports: [MenuComponent, ChangeAparenceComponent],
})
export class SharedModule {}
