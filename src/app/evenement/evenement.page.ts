import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import {toInteger} from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {
  event: Observable<any>;
  id: string;
  titre: string;
  img: string;
  date: string;
  heure: string;
  debutEvenement: string;
  finEvenement: string;
  qrCodeTexte: string;
  retour: string;

  constructor(public firestore: FirebaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Récupération du paramètre indiquant la page d'où l'on vient
    this.route.queryParams.subscribe(props => {
      this.retour = props.retour;
      // Récupération des informations de l'événement dans la BD
      this.route.paramMap.subscribe(params => {
        // Récupération de l'id de l'évènement
        this.id = params.get('id');
        this.event = this.firestore.getEventDocById(this.id);
        // Requête pour récupérer les informations de l'énvènements
        this.event.subscribe(data => {
          this.titre = data.titre;
          this.img = data.img;
          this.date = data.date.toDate().toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric', day: 'numeric'});
          this.heure = data.heure;

          // On découpe la date pour avoir le jour, le mois et l'année en séparer
          const dateEvenement = this.date.split('/');

          // On vérifie si l'évènement à une heure de début et de fin
          // Si oui, on les convertit pour les utilisées
          // Si non, on aura uniquement l'heur de départ et il faudra créer une date de fin 1 heure après
          if (this.heure.length > 5 && (this.heure[4] === 'à' || this.heure[6] === 'à')){
            this.debutEvenement = this.heure.split(' ')[0].replace('h', '');
            this.finEvenement = this.heure.split(' ')[2].replace('h', '');
          } else {
            this.debutEvenement = this.heure.replace('h', '');
            // tslint:disable-next-line:radix
            let heureEvenement = parseInt(this.debutEvenement);

            if (heureEvenement < 100){
              heureEvenement += 1;
            } else {
              heureEvenement += 100;
            }
            this.finEvenement = heureEvenement.toString();
          }

          // On vérifie la taille de l'heure pour savoir si il y aussi les minutes
          // Si on a 2 caractères, alors on connait uniquement l'heure
          // Sinon, on a l'heure et les minutes de connu
          if (this.debutEvenement.length === 2){
            this.debutEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + this.debutEvenement + '00' + '00Z';
          } else {
            this.debutEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + this.debutEvenement + '00Z';
          }

          // On vérifie la taille de l'heure pour savoir si il y aussi les minutes
          // Si on a 2 caractères, alors on connait uniquement l'heure
          // Sinon, on a l'heure et les minutes de connu
          if (this.finEvenement.length === 2){
            this.finEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + this.finEvenement + '00' + '00Z';
          } else {
            this.finEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + this.finEvenement + '00Z';
          }

          // On écrit l'ensemble des informations dans le lien
          this.qrCodeTexte = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
              this.titre.split(' ').join('%20') + '&dates=' + this.debutEvenement + '/' + this.finEvenement + '&ctz=Europe/London';
        });
      });

    });
  }
}
