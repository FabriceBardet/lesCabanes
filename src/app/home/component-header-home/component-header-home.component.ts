import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-header-home',
  templateUrl: './component-header-home.component.html',
  styleUrls: ['./component-header-home.component.scss'],
})
export class ComponentHeaderHomeComponent implements OnInit {
nomPage = 'Aujourd\'hui aux cabanes';
  constructor() { }

  ngOnInit() {}

}
