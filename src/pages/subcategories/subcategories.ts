import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {SubCategoryProvider} from  '../../providers/sub-category/sub-category'
import {ServicesPage} from '../services/services'


/**
 * Generated class for the SubcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategories',
  templateUrl: 'subcategories.html',
})
export class SubcategoriesPage {
  private parentTitle:any;
  private parentId:any;
  subCategories: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public subCat: SubCategoryProvider,) {
    this.parentTitle= navParams.get("title");
    this.parentId= navParams.get("categoryId");
    console.log("Id de la Categoria: ", this.parentId)

    this.subCat.getsubcategories(this.parentId)
    .then(
      (subCat) => {
        this.subCategories = subCat;
        this.loading.dismiss();
      }
    ).catch(
      (error) => {

          }
    );

  }
  openServicesPage(id){
    this.navCtrl.push(ServicesPage,{
      subCatId:id
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoriesPage');
  }

}
