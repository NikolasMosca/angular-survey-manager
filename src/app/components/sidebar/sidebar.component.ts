import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Routes } from '../../interfaces/sidebar'
import { RoutesList } from 'src/app/data/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onClickMenuItem = new EventEmitter<any>();
  routes: Array<Routes> = RoutesList
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick():void {
    this.onClickMenuItem.emit()
  }

}
