import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  // Informations du menu
  title: Observable<any[]>;

  // Récupération des informations du Menu dans la BD
  constructor(public firestore: FirebaseService) {
    this.title = this.firestore.getCollectionValue('Menu');
  }

}
