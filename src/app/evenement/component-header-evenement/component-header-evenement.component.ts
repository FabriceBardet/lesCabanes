import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component-header-evenement',
  templateUrl: './component-header-evenement.component.html',
  styleUrls: ['./component-header-evenement.component.scss'],
})
export class ComponentHeaderEvenementComponent implements OnInit {
  @Input() nomPage: string;
  nomRetour: string;
  @Input() routeRetour: string;

  constructor(public router: Router) {
  }

  ngOnInit() {
    // on modifie le texte du bouton retour en fonction de la page depuis laquelle on vient
    if (this.routeRetour === 'home') {
      this.nomRetour = 'Accueil';
    }
    else if (this.routeRetour === 'agenda') {
      this.nomRetour = 'Agenda';
    }
  }

  /**
   * Redirige vers la page d'où l'on vient
   */
  public navRetour(): void {
    this.router.navigate([this.routeRetour]);
  }
}
