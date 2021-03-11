import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss'],
})
export class ActivitesComponent implements OnInit {
  sliderConfig = {
    autoplay: true,
    effect: 'flip',
  };
  date = new Date();
  nomDeTable = 'Evenements';
  activitesAAfficher; // Supposé être les activités du jour mais notre base de données ne comportent qu'un échantillon
  listeDesEvenements; // tous les évènements


  constructor(public firestore: FirebaseService, private router: Router) {
  }

  ngOnInit() {
    // Récupération des informations des activités dans la bd
    this.firestore.getCollectionSnapshot(this.nomDeTable).subscribe(data => {
      this.listeDesEvenements = data.map(e => {
        return {
          id: e.payload.doc.id,
          date: e.payload.doc.data()['date'],
          desc: e.payload.doc.data()['desc'],
          img: e.payload.doc.data()['img'],
          titre: e.payload.doc.data()['titre']
        };
      });
      this.activitesAAfficher = this.listeDesEvenements.slice(3, 5);
    });
  }

  /**
   * Ouvre la page détail de l'évènement sélectionné
   * @param id string, l'id du document permettant de l'identifier dans la BD
   */
  navDetails(id: string) {
    this.router.navigate(['evenement/' + id], {queryParams: {retour: 'home'}});

  }
}
