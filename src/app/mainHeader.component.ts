import { Component } from '@angular/core'

@Component({
    selector: 'main-header',
    template: ` <div>
        {{title}}
        </div>
    `
 })
export class MainHeaderComponent{
    private title = 'Universal Stuff'
    constructor(){}

} 