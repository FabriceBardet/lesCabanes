import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BivouacPageRoutingModule } from './bivouac-routing.module';

import { BivouacPage } from './bivouac.page';
import { HomePageModule } from "../home/home.module";
import { DetailsBivouacComponent } from "./details-bivouac/details-bivouac.component";
import { Camp4PageModule } from "../camp4/camp4.module";
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BivouacPageRoutingModule,
    HomePageModule,
    Camp4PageModule,
    QRCodeModule,
  ],
  declarations: [BivouacPage, DetailsBivouacComponent]
})
export class BivouacPageModule { }
