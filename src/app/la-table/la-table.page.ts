import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-table',
  templateUrl: './la-table.page.html',
  styleUrls: ['./la-table.page.scss'],
})
export class LaTablePage implements OnInit {
  // nom du document stockant les informations de contacts/tarifs en BD
  docBD = 'Table';
  // Stocke le nom du Component
  nomPage = 'La Table';
  // Stocke l'image allant avec le nom du Component
  iconePage = 'picto-restauration-orange.png';
  // Stocke le nom du bouton retour
  texteIconeRetour = 'Découverte';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  routeRetour = 'navigation';
  // Titre pour les actualités
  nomActu = 'de la Table';

  constructor() { }

  ngOnInit() {
  }

}
