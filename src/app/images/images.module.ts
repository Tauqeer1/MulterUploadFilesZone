//scr/app/features/images/imags.module.ts

/********************************************* 
 *        Required Angular Modules
*********************************************/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'; 
import { MaterialModule } from '@angular/material';


import { ImagesMainComponent }  from './components/imagesMain.component';
import { ImagesHomeComponent }  from './components/imagesHome.component';
import { FileUploadComponent }  from './components/file-upload.component'; 

//ng2-uploader
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

import { imagesRoutes } from './images.routing'

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(imagesRoutes),
        MaterialModule.forRoot(),
    ],
    exports: [ImagesMainComponent,
        ImagesHomeComponent],
    declarations: [ImagesMainComponent,
        ImagesHomeComponent,
        UPLOAD_DIRECTIVES,
        FileUploadComponent
    ],
    providers: [],
})
export class ImagesModule { }
