import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { ModalTimelineComponent } from '../modal-timeline/modal-timeline.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.scss'],
})
export class HistoireComponent implements OnInit {
  private histoire: Observable<any>;
  private paragraphe1: string;
  private paragraphe2: string;
  private credits: string;

  constructor(private firebaseService: FirebaseService,
              private controleurModal: ModalController) { }


  ngOnInit() {
    // Récupération des informations sur l'histoire des cabanes dans  la BD
    this.histoire = this.firebaseService.getHistoireCabanes();
    this.histoire.subscribe(data => {
      this.paragraphe1 = data.p1;
      this.paragraphe2 = data.p2;
      this.credits = data.credits;
    });
  }

  /**
   * affichage du modal pour la timeline
   */
  public async presenterModal() {
    const modal = await this.controleurModal.create({
      component: ModalTimelineComponent,
      cssClass: 'modal-css'
    });
    return await modal.present();
  }
}
