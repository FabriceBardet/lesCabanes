import { Component } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Stocke le nom du Component
  nomPage = 'Aujourd\'hui aux cabanes';

  constructor(public firestore: FirebaseService) {
    // Retour sur la précédente au clic du bouton Retour
    if (this.firestore.pageRetourDeDetailEvenement !== '/home'){
      this.firestore.pageRetourDeDetailEvenement = '/home';
    }
  }
}
