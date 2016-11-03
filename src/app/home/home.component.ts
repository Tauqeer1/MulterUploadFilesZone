import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `Universal App with Upload Images <br/>
    Go to 
    <a [routerLink]="['/images']">Images</a>     
    to see error, with multer.
  `
})
export class HomeComponent {

}
