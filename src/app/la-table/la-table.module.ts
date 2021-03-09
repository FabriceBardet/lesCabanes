import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaTablePageRoutingModule } from './la-table-routing.module';

import { LaTablePage } from './la-table.page';
import {DetailsTableComponent} from "./details-table/details-table.component";
import {HomePageModule} from "../home/home.module";
import {Camp4PageModule} from "../camp4/camp4.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaTablePageRoutingModule,
    HomePageModule,
    Camp4PageModule
  ],
    declarations: [LaTablePage, DetailsTableComponent]
})
export class LaTablePageModule {}
