import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.scss'],
})
export class DetailEvenementComponent implements OnInit {
  @Input() id: string;
  event: Observable<any>;
  heure: string;
  desc: string;
  date: any;

  constructor(public firestore: FirebaseService) {
  }

  /**
   * Récupération des informations de la BD et convertion de la date
   */
  ngOnInit() {
    this.event = this.firestore.getEventDocById(this.id);
    this.event.subscribe(data => {
      this.date = data.date.toDate().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      this.desc = data.desc;
      this.heure = data.heure;
    });
  }

}
