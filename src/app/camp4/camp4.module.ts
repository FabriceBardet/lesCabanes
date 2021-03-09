import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camp4PageRoutingModule } from './camp4-routing.module';

import { Camp4Page } from './camp4.page';
import { HomePageModule } from '../home/home.module';
import { ActualiteComponent } from '../Components/actualite/actualite.component';
import { DetailsComponent } from './component-details/details.component';
import { ProgrammePageComponent } from '../Components/programme-page/programme-page.component';
import { NavigationPageModule } from '../navigation/navigation.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Camp4PageRoutingModule,
        HomePageModule,
        NavigationPageModule,
        QRCodeModule
    ],
    exports: [
        ActualiteComponent,
        DetailsComponent,
        ProgrammePageComponent
    ],
    declarations: [Camp4Page, ActualiteComponent, DetailsComponent, ProgrammePageComponent]
})
export class Camp4PageModule { }
