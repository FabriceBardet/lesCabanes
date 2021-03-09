import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-tiers-lieu',
  templateUrl: './tiers-lieu.component.html',
  styleUrls: ['./tiers-lieu.component.scss'],
})
export class TiersLieuComponent implements OnInit {
  private tiersLieu: Observable<any>;
  private paragraphe1: string;
  private paragraphe2: string;
  private photo: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Récupération des informations sur le tiersLieu dans la bd
    this.tiersLieu = this.firebaseService.getPresentationTiersLieu();
    this.tiersLieu.subscribe(data => {
      this.paragraphe1 = data.p1;
      this.paragraphe2 = data.p2;
      this.photo = data.photo;
    });
  }
}
