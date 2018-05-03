import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  constructor(public navCtrl: NavController) { }

  pushPage() {  
    this.navCtrl.push(SobrePage, {
      id: "123",
      name: "Carl"
    });
  }

}
