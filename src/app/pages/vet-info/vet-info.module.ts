import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetInfoPageRoutingModule } from './vet-info-routing.module';

import { VetInfoPage } from './vet-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetInfoPageRoutingModule
  ],
  declarations: [VetInfoPage]
})
export class VetInfoPageModule {}
