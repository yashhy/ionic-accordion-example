import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusPage } from '../bus/bus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDropPoints() {
    this.navCtrl.setRoot(BusPage);
  }
}
