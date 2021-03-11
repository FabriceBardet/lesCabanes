import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { FiltresComponent } from '../filtres/filtres.component';
import { ModalController } from '@ionic/angular';
import firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;

@Component({
  selector: 'app-component-card-evenement',
  templateUrl: './component-card-evenement.component.html',
  styleUrls: ['./component-card-evenement.component.scss'],
})
export class ComponentCardEvenementComponent implements OnInit {
  @Input() evenement: DocumentData;
  test = 'true';
  constructor(private firestore: FirebaseService,
              private router: Router, public controleurModal: ModalController) {
  }

  ngOnInit() {
  }

  /**
   * application des filtres par ordre alphabétique ou par date
   */


  /**
   * Ouvre la page détail de l'évènement sélectionné
   * @param id string, l'id du document permettant de l'identifier dans la BD
   */
  navDetails(id: string) {
    this.router.navigate(['evenement/' + id], {queryParams: {retour: 'agenda'}});
  }



}
