import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
var window = global;
global['window'] = window;

import { MdSidenav } from '@angular2-material/sidenav';


@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  template: `
  <div class="md-toolbar-class">
      <md-toolbar color="primary" class="toolbar-top md-elevation-z4">
        <i class="material-icons"   
              (click)="toggleSideNav()" 
              style="font-size:36px; cursor:pointer" >
                menu
            </i>
          <main-header></main-header>
      
      
          <span class="fill-remaining"></span>

          <div>
                <i class="material-icons" style="font-size:36px; cursor:pointer"   
                  (click)="end.toggle()">
                  person
                </i>
          </div>
      </md-toolbar>
    </div>
    <router-outlet></router-outlet>
  `,
   encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  @ViewChild(MdSidenav)
  private _sideNav: MdSidenav;

  /**Side Nav Start(Left Side) */
  toggleSideNav(){this._sideNav.toggle();}  

  constructor(  ){

  }

  //After Init, check the cookie to see if user is logged in and token is still valid.

}
