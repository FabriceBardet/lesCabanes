import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlanningComponent } from '../component-planning/planning.component';
import {FirebaseService} from '../../services/firebase.service';
import {SocialBoulderComponent} from '../social-boulder/social-boulder.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private donnees;


  constructor(private controleurModal: ModalController,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des informations de camp4 dans la bd
    this.donnees = [];
    this.firebaseService.getDetailsPage('Camp4').subscribe( data => {
      data.forEach(doc => {
        this.donnees.push(doc);
      });
    });
  }

  /**
   * Transition vers le modal du planning
   */
  public async presenterModal() {
    const modal = await this.controleurModal.create({
      component: PlanningComponent,
      cssClass: 'modal-css'
    });
    return await modal.present();
  }

  /**
   * Transition vers le modal de SocialBoulder
   */
  public async presenterModalSocialBoulder(){
    const modal = await this.controleurModal.create({
      component: SocialBoulderComponent,
      cssClass: 'modal-css'
    });
    return await modal.present();
  }

}
