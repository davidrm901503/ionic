import {Component} from '@angular/core';
import {Http} from '@angular/http';
import  {SubCategoryProvider} from  '../../providers/sub-category/sub-category'
import  {PopoverPage} from  '../pop-over/pop-over'
import {ServicesPage} from '../services/services'
import  {CategoriesPage} from  '../categories/categories'
import 'rxjs/add/operator/map';

import {PopoverController,NavController,} from 'ionic-angular';

import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subCategories: any;
  loading: any;
  connetionDown: boolean;


  constructor(private popoverCtrl: PopoverController,
    public http: Http,
     public subCat: SubCategoryProvider,
     public navCtrl: NavController ,public load: LoadingController) {
     this.loading = this.load.create();
     this.connetionDown =false;
     this.loading.present();

    this.subCat.topSubcategories()
      .then(
        (cat) => {
          this.subCategories = cat;
          this.loading.dismiss();
        }
      ).catch(
        (error) => {
          this.loading.dismiss();
          this.connetionDown = true;
            }
      );
  }

  delete(chip: Element) {
    chip.remove();
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }
  openCategoriesPage(){
    this.navCtrl.push(CategoriesPage)
  }
  openServicesPage(id){
    this.navCtrl.push(ServicesPage,{
      subCatId:id
    });
  }
  reConnect(){
    this.loading = this.load.create();
    this.connetionDown =false;
    this.loading.present();

    this.subCat.topSubcategories()
    .then(
      (cat) => {
        this.subCategories = cat;
        this.loading.dismiss();
      }
    ).catch(
      (error) => {
        this.loading.dismiss();
        this.connetionDown = true;
          }
    );
  }
}

