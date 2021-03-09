import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss'],
})
export class FiltresComponent implements OnInit {

  trierParDateValidation: string;
  colorDate: string;
  colorNom: string;

  constructor(public controleurModal: ModalController,
              public firebase: FirebaseService,
              public route: Router,
              public navCtrl: NavController) {
  }

  ngOnInit() { }

  /**
   * Bouton pour la validation des filtres qui est par défaut par date
   */
  public validation() {
    this.controleurModal.dismiss(this.trierParDateValidation);
  }
}
