import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-social-boulder',
  templateUrl: './social-boulder.component.html',
  styleUrls: ['./social-boulder.component.scss'],
})
export class SocialBoulderComponent implements OnInit {

  constructor(private controleurModal: ModalController) { }

  ngOnInit() {}

  /**
   * Cache le modal
   */
  public dismiss(){
    this.controleurModal.dismiss({
      dismissed: true
    });
  }
}
