import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeDomePageRoutingModule } from './le-dome-routing.module';

import { LeDomePage } from './le-dome.page';
import {HomePageModule} from '../home/home.module';
import {Camp4PageModule} from '../camp4/camp4.module';
import {DetailsDomeComponent} from "./details-dome/details-dome.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LeDomePageRoutingModule,
        HomePageModule,
        Camp4PageModule
    ],
    declarations: [LeDomePage, DetailsDomeComponent]
})
export class LeDomePageModule {}
