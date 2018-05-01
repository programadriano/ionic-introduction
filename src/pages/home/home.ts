import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sobrePage = SobrePage;
  
  constructor(public navCtrl: NavController) {

  }

}
