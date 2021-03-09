import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-camp4',
  templateUrl: './camp4.page.html',
  styleUrls: ['./camp4.page.scss'],
})
export class Camp4Page implements OnInit {
  // nom du document stockant les informations de contacts/tarifs en BD
  docBD = 'Camp4';
  // Stocke le nom du Component
  nomPage = 'Camp 4';
  // Stocke l'image allant avec le nom du Component
  iconePage = 'picto-magasin-orange.png';
  // Stocke le nom du bouton retour
  texteIconeRetour = 'Découverte';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  routeRetour = 'navigation';
  // Titre pour les actualités
  nomActu = 'de Camp 4';


  constructor() { }

  ngOnInit() {
  }

}
