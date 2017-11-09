import { Component } from '@angular/core';
import {PopoverPage} from  '../../pages/pop-over/pop-over'
import { PopoverController} from 'ionic-angular';
/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  constructor(public popCtrl: PopoverController) { }
  presentPopover(ev) {
    let popover = this.popCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

}
