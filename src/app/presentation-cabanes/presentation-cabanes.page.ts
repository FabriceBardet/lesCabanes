import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-cabanes',
  templateUrl: './presentation-cabanes.page.html',
  styleUrls: ['./presentation-cabanes.page.scss'],
})
export class PresentationCabanesPage implements OnInit {
  // Stocke le nom du Component
  private nomPage = 'L\'univers des cabanes';
  // Stocke l'image allant avec le nom du Component
  private iconePage = '';
  // Stocke le nom du bouton retour
  private texteIconeRetour = 'Découverte';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  private routeRetour = 'navigation';


  constructor() { }

  ngOnInit() {
  }
}
