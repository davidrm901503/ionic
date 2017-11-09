import { Component } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import {SignupPage} from '../signup/signup'

@Component({
  selector: 'pop-over',
  templateUrl: 'pop-over.html',
})
export class PopoverPage {
  isLogin:any = false;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
  openLoginPage(){
    this.navCtrl.push(LoginPage);
    this.viewCtrl.dismiss();
  }
  openSignUpPage(){
    this.navCtrl.push(SignupPage);
    this.viewCtrl.dismiss();
  }
}
