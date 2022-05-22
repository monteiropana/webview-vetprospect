import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetInfoPage } from './vet-info.page';

const routes: Routes = [
  {
    path: '',
    component: VetInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetInfoPageRoutingModule {}
