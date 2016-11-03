import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ImagesHomeComponent } from './images/components/imagesHome.component'

import { Routes } from '@angular/router';


export const routes:Routes=[
      {path: 'about', component: AboutComponent},
      {path: 'images', component: ImagesHomeComponent},
      {path: '', component: HomeComponent}
];