//src/app/features/images/components/file-upload.component

import { Component, OnInit, NgZone, Input, HostListener, HostBinding, ElementRef} from '@angular/core';
import { UrlConfig } from '../../urlConfig.class';

@Component({
  selector: 'file-upload',
  template: require('../templates/file-upload.component.html'),
  styles: []
})
export class FileUploadComponent{

 private urlConfig = new UrlConfig();
 private uploadUrl = this.urlConfig.baseIpAddr + this.urlConfig.sitePort + '/upload' 
uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: this.uploadUrl
  };

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void { 
    this.hasBaseDropZoneOver = e;
  }
}