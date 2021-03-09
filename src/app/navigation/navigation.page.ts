import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  // Stocke le nom du Component
  private nomPage = 'Découvrir les lieux';
  // Stocke l'image allant avec le nom du Component
  private iconePage = '';
  // Stocke le nom du bouton retour
  private texteIconeRetour = 'Accueil';
  // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
  private routeRetour = 'home';


  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Retourne sur la page d'accueil
   */
  public retourAccueil(): void {
    this.router.navigate(['home']);
  }

  /**
   * Va vers la page Présentation des cabanes
   */
  public navPresentation(): void {
    this.router.navigate(['presentation-cabanes']);
  }

  /**
   * Va vers la page camp4
   */
  public navCamp(): void {
    this.router.navigate(['camp4']);
  }

  /**
   *  Va vers la page le-dome
   */
  public navDome(): void {
    this.router.navigate(['le-dome']);
  }

  /**
   * Va vers la page bivouac
   */
  public navBivouac(): void{
    this.router.navigate(['bivouac']);
  }

  /**
   * Va vers la page la-table
   */
  public navTable(): void {
    this.router.navigate(['la-table']);
  }

  /**
   * Va vers la page de l'agenda
   */
  public navEvenements(): void {
    this.router.navigate(['agenda']);
  }
}
