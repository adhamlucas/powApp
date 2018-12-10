import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PowPage } from '../pow/pow';

/**
 * Generated class for the BotaoPowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-botao-pow',
  templateUrl: 'botao-pow.html',
})
export class BotaoPowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pow(){
    this.navCtrl.push(PowPage);
  }

}
