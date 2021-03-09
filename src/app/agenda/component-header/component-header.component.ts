import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltresComponent } from '../filtres/filtres.component';


@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.scss'],
})
export class ComponentHeaderComponent implements OnInit {
  @Input() nomPage: string;
  @Output() typeChanged = new EventEmitter<string>();
  test;

  constructor(public controleurModal: ModalController) { }

  ngOnInit() {
  }

  /**
   * Ouvre la pop-up des filtres par dates et par ordre Alphabétique
   */
  public async voirFiltres() {
    const modal = await this.controleurModal.create({
      component: FiltresComponent,
      cssClass: 'modal-css'
    });

    modal.onWillDismiss().then(dataReturned => {
      this.test = dataReturned.data;
      this.typeChanged.emit(this.test);
    });
    return await modal.present();
  }
}
