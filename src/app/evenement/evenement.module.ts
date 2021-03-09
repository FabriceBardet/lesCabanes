import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { EvenementPageRoutingModule } from './evenement-routing.module';

import { EvenementPage } from './evenement.page';
import { ComponentHeaderEvenementComponent } from './component-header-evenement/component-header-evenement.component';

import { DetailEvenementComponent } from './component-detail-evenement/detail-evenement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementPageRoutingModule,
    QRCodeModule
  ],
  declarations: [EvenementPage, DetailEvenementComponent, ComponentHeaderEvenementComponent]
})
export class EvenementPageModule { }
