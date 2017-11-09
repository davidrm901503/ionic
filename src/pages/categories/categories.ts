import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController} from 'ionic-angular';
import  {CategoryProvider} from  '../../providers/category/category.service';
import { LoadingController } from 'ionic-angular';
import  {PopoverPage} from  '../pop-over/pop-over'
import {SubcategoriesPage} from '../subcategories/subcategories'


/**
 * Generated class for the CetegoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',

})
export class CategoriesPage {
 categories: any;
  constructor(public navCtrl: NavController,
    public category: CategoryProvider,
    public load: LoadingController,public popCtrl: PopoverController) {
    const loading = this.load.create();
    loading.present();
    category.getcategories()
      .then(
        (cat) => {
          this.categories = cat;
          loading.dismiss();
        }
      );
  }
  presentPopover(ev) {
    let popover = this.popCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }
  openSubcategories(catId,title){
      this.navCtrl.push(SubcategoriesPage,{
        categoryId:catId,
        title:title
      });
  }

}
