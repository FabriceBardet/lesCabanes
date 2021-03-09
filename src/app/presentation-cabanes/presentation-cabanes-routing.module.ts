import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationCabanesPage } from './presentation-cabanes.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationCabanesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationCabanesPageRoutingModule {}
