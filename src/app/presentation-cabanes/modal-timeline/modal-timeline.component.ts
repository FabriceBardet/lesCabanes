import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-timeline',
  templateUrl: './modal-timeline.component.html',
  styleUrls: ['./modal-timeline.component.scss'],
})
export class ModalTimelineComponent implements OnInit {

  constructor(private controleurModal: ModalController) { }

  ngOnInit() { }

  /**
   * Supression du modal au clic
   */
  dismiss() {
    this.controleurModal.dismiss();
  }
}
