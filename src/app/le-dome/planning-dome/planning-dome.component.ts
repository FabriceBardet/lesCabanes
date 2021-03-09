import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-planning-dome',
  templateUrl: './planning-dome.component.html',
  styleUrls: ['./planning-dome.component.scss'],
})
export class PlanningDomeComponent implements OnInit {
  private semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  private coursYoga;
  private coursYogaLundi: Observable<any[]>;
  private coursYogaMardi: Observable<any[]>;
  private coursYogaMercredi: Observable<any[]>;
  private coursYogaJeudi: Observable<any[]>;
  private coursYogaVendredi: Observable<any[]>;

  constructor(private controleurModal: ModalController,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des information de chaque cours de Yoga dans la BD par jour
    this.coursYogaLundi = this.firebaseService.getCoursByJour('CoursYoga', 'lundi');
    this.coursYogaMardi = this.firebaseService.getCoursByJour('CoursYoga', 'mardi');
    this.coursYogaMercredi = this.firebaseService.getCoursByJour('CoursYoga', 'mercredi');
    this.coursYogaJeudi = this.firebaseService.getCoursByJour('CoursYoga', 'jeudi');
    this.coursYogaVendredi = this.firebaseService.getCoursByJour('CoursYoga', 'vendredi');

    // ajout de tous les cours triés par jour
    this.coursYoga = new Map();
    this.coursYoga.set('lundi', this.coursYogaLundi);
    this.coursYoga.set('mardi', this.coursYogaMardi);
    this.coursYoga.set('mercredi', this.coursYogaMercredi);
    this.coursYoga.set('jeudi', this.coursYogaJeudi);
    this.coursYoga.set('vendredi', this.coursYogaVendredi);
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
