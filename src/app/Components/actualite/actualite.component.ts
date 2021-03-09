import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit {
  activiteEnCours: Observable<any[]>;
  activiteAVenir: Observable<any[]>;
  collectionEnCours = 'ActiviteEnCours';
  collectionAVenir = 'ActiviteAVenir';

  constructor(public firestore: FirebaseService) {
    // récupérations des actualités dans la base de données
    this.activiteEnCours = this.firestore.getCollectionValue(this.collectionEnCours);
    this.activiteAVenir = this.firestore.getCollectionValue(this.collectionAVenir);
  }

  ngOnInit() { }

}
