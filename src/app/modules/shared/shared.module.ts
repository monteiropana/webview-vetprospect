import { VetCardComponent } from './../../components/vet-card/vet-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VetCardComponent
  ],
  exports: [ VetCardComponent ]
})
export class SharedModule { }
