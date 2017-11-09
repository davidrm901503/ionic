import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import  {ServiceProvider} from  '../../providers/service/service'

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  private subCatId:any;
  services: any;
  selectOptions: any;
  loading: any;
  ciudad:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servProv: ServiceProvider,public load: LoadingController) {
    this.subCatId= navParams.get("subCatId");
    this.selectOptions = {
      title: 'Pizza Toppings',
      subTitle: 'Select your toppings'


    };
    console.log("ID de la Subcategoria ",this.subCatId = navParams.get("subCatId"))

    this.loading = this.load.create();
    this.loading.present();

    this.servProv.getServiceByCat(this.subCatId).then(
      (serv) => {
        this.services = serv;
        this.loading.dismiss();
      }
    ).catch(
      (error) => {

          }
    );
  }
  onChange(value){
    console.log(this.ciudad);
    console.log(value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }
  openServicePage(id){
    console.log("abrir el servicio",id);
  }



}
