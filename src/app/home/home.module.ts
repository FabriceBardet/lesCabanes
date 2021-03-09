import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent} from '../Components/component-header/header.component';
import {ActivitesComponent} from './component-activites/activites.component';
import {DecouverteComponent} from './component-decouverte/decouverte.component';
import {MenuComponent} from './component-menu/menu.component';
import {ComponentHeaderHomeComponent} from './component-header-home/component-header-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        HeaderComponent
    ],

    declarations: [HomePage, HeaderComponent, DecouverteComponent, ActivitesComponent, MenuComponent, ComponentHeaderHomeComponent]
})
export class HomePageModule {}
