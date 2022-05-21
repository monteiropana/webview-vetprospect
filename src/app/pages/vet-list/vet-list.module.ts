import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetListPageRoutingModule } from './vet-list-routing.module';

import { VetListPage } from './vet-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetListPageRoutingModule
  ],
  declarations: [VetListPage]
})
export class VetListPageModule {}
