import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  pushPage() {
    this.navCtrl.push(SobrePage, {
      id: "123",
      name: "Carl"
    });
  }

  logIn() {
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }

}
