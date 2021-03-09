import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { PlanningComponent } from "../../camp4/component-planning/planning.component";
import { ModalController } from "@ionic/angular";
import { PlanningDomeComponent } from "../planning-dome/planning-dome.component";

@Component({
  selector: 'app-details-dome',
  templateUrl: './details-dome.component.html',
  styleUrls: ['./details-dome.component.scss'],
})
export class DetailsDomeComponent implements OnInit {
  private donnees;

  constructor(private firebaseService: FirebaseService,
              private controleurModal: ModalController) { }

  ngOnInit() {
    // Récupération des informations du Dome dans la bd
    this.donnees = [];
    this.firebaseService.getDetailsPage('Dome').subscribe(data => {
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
      component: PlanningDomeComponent,
      cssClass: 'modal-css'
    });
    return await modal.present();
  }


}
