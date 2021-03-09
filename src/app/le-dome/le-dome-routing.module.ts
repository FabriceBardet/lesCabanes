import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeDomePage } from './le-dome.page';

const routes: Routes = [
  {
    path: '',
    component: LeDomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeDomePageRoutingModule {}
