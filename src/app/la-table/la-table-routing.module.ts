import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaTablePage } from './la-table.page';

const routes: Routes = [
  {
    path: '',
    component: LaTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaTablePageRoutingModule {}
