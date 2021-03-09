import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BivouacPage } from './bivouac.page';

const routes: Routes = [
  {
    path: '',
    component: BivouacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BivouacPageRoutingModule {}
