import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-dome',
  templateUrl: './le-dome.page.html',
  styleUrls: ['./le-dome.page.scss'],
})
export class LeDomePage implements OnInit {
  // nom du document stockant les informations de contacts/tarifs en BD
  docBD = 'Dome';
  // Stocke le nom du Component
  nomPage = 'Le Dôme';
  // Stocke l'image allant avec le nom du Component
  iconePage = 'picto-yoga-orange.png';
  // Stocke le nom du bouton retour
  texteIconeRetour = 'Découverte';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  routeRetour = 'navigation';
  // Titre pour les actualités
  nomActu = 'du Dôme';

  constructor() { }

  ngOnInit() {
  }

}
