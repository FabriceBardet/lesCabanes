import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.component.html',
  styleUrls: ['./decouverte.component.scss'],
})
export class DecouverteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  /**
   * Transition vers la page de découverte des lieux
   */
  public navNavigation(): void {
    this.router.navigate(['navigation']);
  }

}
