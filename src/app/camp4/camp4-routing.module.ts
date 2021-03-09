import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Camp4Page } from './camp4.page';

const routes: Routes = [
  {
    path: '',
    component: Camp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Camp4PageRoutingModule {}
