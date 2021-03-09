import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-details-bivouac',
  templateUrl: './details-bivouac.component.html',
  styleUrls: ['./details-bivouac.component.scss'],
})
export class DetailsBivouacComponent implements OnInit {
  private donnees;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des informations du bivouac dans la bd
    this.donnees = [];
    this.firebaseService.getDetailsPage('Bivouac').subscribe(data => {
      data.forEach(doc => {
        this.donnees.push(doc);
      });
    });
  }

}
