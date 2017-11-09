import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController,ToastController } from 'ionic-angular';
import {User} from '../../models/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User;
  loading: any;
  error: string;

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController,public load: LoadingController) {
    this.user = new User();
    this.error = '';
  }


  doLogin() {
   // this.loading = this.load.create();
    //this.loading.present();
    console.log("login",this.user.email,this.user.password);
    this.navCtrl.pop()

    // let toast = this.toastCtrl.create({
    //   message: "correo o contraseña invalidos",
    //   duration: 5000,
    //   position: 'middle',
    //   showCloseButton:true,
    //   closeButtonText:"Cerrar"
    // });
    // toast.present();
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
