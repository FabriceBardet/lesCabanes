import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  private semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  private coursEscalade;
  private coursEscaladeLundi: Observable<any[]>;
  private coursEscaladeMardi: Observable<any[]>;
  private coursEscaladeMercredi: Observable<any[]>;
  private coursEscaladeJeudi: Observable<any[]>;
  private coursEscaladeVendredi: Observable<any[]>;
  private coursEscaladeSamedi: Observable<any[]>;
  private coursEscaladeDimanche: Observable<any[]>;


  constructor(private controleurModal: ModalController,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des infos de la BD pour le planning, jour par jour
    this.coursEscaladeLundi = this.firebaseService.getCoursByJour('CoursEscalade', 'lundi');
    this.coursEscaladeMardi = this.firebaseService.getCoursByJour('CoursEscalade', 'mardi');
    this.coursEscaladeMercredi = this.firebaseService.getCoursByJour('CoursEscalade', 'mercredi');
    this.coursEscaladeJeudi = this.firebaseService.getCoursByJour('CoursEscalade', 'jeudi');
    this.coursEscaladeVendredi = this.firebaseService.getCoursByJour('CoursEscalade', 'vendredi');
    this.coursEscaladeSamedi = this.firebaseService.getCoursByJour('CoursEscalade', 'samedi');
    this.coursEscaladeDimanche = this.firebaseService.getCoursByJour('CoursEscalade', 'dimanche');

    // ajout de tous les cours par jour à la liste des cours
    this.coursEscalade = new Map();
    this.coursEscalade.set('lundi', this.coursEscaladeLundi);
    this.coursEscalade.set('mardi', this.coursEscaladeMardi);
    this.coursEscalade.set('mercredi', this.coursEscaladeMercredi);
    this.coursEscalade.set('jeudi', this.coursEscaladeJeudi);
    this.coursEscalade.set('vendredi', this.coursEscaladeVendredi);
    this.coursEscalade.set('samedi', this.coursEscaladeSamedi);
    this.coursEscalade.set('dimanche', this.coursEscaladeDimanche);
  }

  /**
   * Cache le modal
   */
  public dismiss() {
    this.controleurModal.dismiss({
      dismissed: true
    });
  }


}
