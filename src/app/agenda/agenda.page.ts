import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  // Stocke le nom du Component
  listeDesEvenements;
  nomPage = 'Agenda';
  private sub: Observable<any[]>;

  constructor(private firestore: FirebaseService) {
    if (this.firestore.pageRetourDeDetailEvenement !== '/agenda') {
      this.firestore.pageRetourDeDetailEvenement = '/agenda';
    }
  }
  /*onTypeEmitted(test: string) {
    return console.log('test: ', test);
  }*/

  ngOnInit() {
    this.trierPar('true');
  }

  /**
   * Trier en date ou en Nom selon le clique sur le bouton
   * @param tri info du bouton pour savoir si c'est tri par date ou par nom
   */
  public trierPar(tri) {
    console.log(typeof tri);
    if (tri === 'true') {
      this.sub = this.firestore.getAllEvenementsTrierParDate();
    }
    else {
      this.sub = this.firestore.getAllEvenementsTrierParNom();
    }

    this.sub.subscribe(data => {
      this.listeDesEvenements = data.map(e => {
        return {
          id: e.payload.doc.id,
          date: e.payload.doc.data()['date'],
          desc: e.payload.doc.data()['desc'],
          img: e.payload.doc.data()['img'],
          titre: e.payload.doc.data()['titre']
        };
      });
    });
  }
}
