import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-programme-page',
  templateUrl: './programme-page.component.html',
  styleUrls: ['./programme-page.component.scss'],
})
export class ProgrammePageComponent implements OnInit {
  @Input() docBD: string;
  @Input() nomPage: string;
  private tarifs; // liste des tarifs
  private contacts; // liste des contacts
  programmeEnCours: Observable<any[]>;
  sliderConfig = {
    autoplay: true,
    effect: 'flip',
  };

  constructor(public firebaseService: FirebaseService) {
  }

  /**
   * Récupération des informations de la BD
   */
  ngOnInit() {
    this.tarifs = [];
    this.contacts = [];
    // récupération des tarifs pour la page
    this.firebaseService.getTarifs(this.docBD).subscribe(tarifs => {
      tarifs.forEach(doc => {
        this.tarifs.push(doc);
      });
      // récupération des contacts pour la page
      this.firebaseService.getContacts(this.docBD).subscribe(contacts => {
        contacts.forEach(doc => {
          this.contacts.push(doc);
        });
      });
    });
    // récupération du programme en cours
    this.programmeEnCours = this.firebaseService.getProgramme('Programme', this.docBD);
  }
}
