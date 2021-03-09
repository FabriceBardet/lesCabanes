import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentationCabanesPageRoutingModule } from './presentation-cabanes-routing.module';

import { PresentationCabanesPage } from './presentation-cabanes.page';
import {HeaderComponent} from '../Components/component-header/header.component';
import {HistoireComponent} from "./histoire/histoire.component";
import {TiersLieuComponent} from "./tiers-lieu/tiers-lieu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationCabanesPageRoutingModule
  ],
  declarations: [PresentationCabanesPage, HeaderComponent, HistoireComponent, TiersLieuComponent]
})
export class PresentationCabanesPageModule {}
