//src/app/features/images/images.routing.ts

import { ModuleWithProviders } from '@angular/core';

import { Routes, 
         CanLoad,
         CanActivate,
         CanActivateChild,
         CanDeactivate,
         RouterModule  } from '@angular/router';


import { ImagesMainComponent } from './components/imagesMain.component';
import { ImagesHomeComponent } from './components/imagesHome.component';
import { FileUploadComponent } from './components/file-upload.component';
export const imagesRoutes: Routes = [
  { path: '',
     component: ImagesMainComponent,
     children: [
         {  path: '',
            children:[
                { path: 'uploadForm', component: FileUploadComponent },
                { path: '', component: ImagesHomeComponent}
            ]
         }
     ]
     },
];

export const imagesRouting: ModuleWithProviders = RouterModule.forChild(imagesRoutes)