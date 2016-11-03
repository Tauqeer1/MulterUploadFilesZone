import { Component,
         ViewEncapsulation,
         ViewChild,
         OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

         
import { MdSidenav } from '@angular/material';

import { MOBILE } from './services/constants';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
 mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';

  
  @ViewChild(MdSidenav)
  private _sideNav: MdSidenav;

  /**Side Nav Start(Left Side) */
  toggleSideNav(){this._sideNav.toggle();}  
  closeSideNav(){this._sideNav.close()}
  openSideNav(){this._sideNav.open()}
    
  logout(){
    //this.userService.logoutUser();
  }
}
