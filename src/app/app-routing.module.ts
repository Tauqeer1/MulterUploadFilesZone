import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
     { path: 'images', loadChildren: './images/images.module#ImagesModule?sync=true'},
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
