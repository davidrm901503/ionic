import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import {User} from '../../models/user';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User;
  loading: any;
  error: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignUp(){

  }
  llenarCampos(){
    let toast = this.toastCtrl.create({
       message: "Ponga correo y password \n para autenticarse",
       duration: 5000,
       position: 'middle',
       showCloseButton:true,
       closeButtonText:"Cerrar"
     });
     toast.present();
 }

}
