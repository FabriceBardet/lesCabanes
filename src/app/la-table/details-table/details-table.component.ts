import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent implements OnInit {
  private donnees;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des informations sur la table depuis la BD
    this.donnees = [];
    this.firebaseService.getDetailsPage('Table').subscribe(data => {
      data.forEach(doc => {
        this.donnees.push(doc);
      });
    });
  }

}
