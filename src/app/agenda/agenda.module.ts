import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import {ComponentHeaderComponent} from './component-header/component-header.component';
import {ComponentCardEvenementComponent} from './component-card-evenement/component-card-evenement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule
  ],
  declarations: [AgendaPage, ComponentHeaderComponent, ComponentCardEvenementComponent]
})
export class AgendaPageModule {}
