import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bivouac',
  templateUrl: './bivouac.page.html',
  styleUrls: ['./bivouac.page.scss'],
})
export class BivouacPage implements OnInit {
  // nom du document stockant les informations de contacts/tarifs en BD
  docBD = 'Bivouac';
  // Stocke le nom du Component
  nomPage = 'Le Bivouac';
  // Stocke l'image allant avec le nom du Component
  iconePage = 'picto-coworking-orange.png';
  // Stocke le nom du bouton retour
  texteIconeRetour = 'Découverte';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  routeRetour = 'navigation';
  // Titre pour les actualités
  nomActu = 'des Cabanes';

  constructor() { }

  ngOnInit() {
  }

}
