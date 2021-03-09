import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-component-header-evenement',
  templateUrl: './component-header-evenement.component.html',
  styleUrls: ['./component-header-evenement.component.scss'],
})
export class ComponentHeaderEvenementComponent implements OnInit {
  @Input() nomPage: string;
  nomRetour: string;

  constructor(public firestore: FirebaseService) {
    // on modifie le texte du bouton retour en fonction de la page depuis laquelle on vient
    if (this.firestore.pageRetourDeDetailEvenement === '/home') {
      this.nomRetour = 'Accueil';
    }
    else if (this.firestore.pageRetourDeDetailEvenement === '/agenda') {
      this.nomRetour = 'Agenda';
    }
  }

  ngOnInit() { }
}
