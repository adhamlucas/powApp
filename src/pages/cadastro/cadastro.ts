import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider, User} from '../../providers/user/user';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider, public alertCtrl: AlertController) {
    
    if(this.navParams.data.user){
      this.model = this.navParams.data.user;
    }
    else{
      this.model = new User();
    }
  }

  showAlert(title: string, subTitle: string, bottons: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [bottons]
    });
    alert.present();
  }

  save() {
    this.userProvider.get(this.model.userName) 
      .then((value) => {
        if(value != null){
          this.showAlert("Error", "Usuário já existe, tente outro!", "ok");
        }
        else{
          this.userProvider.insert(this.model)
            .then(() =>{
              this.showAlert("Cadastro", "Cadastro realizado com sucesso!", "ok");
              this.navCtrl.pop();
            })
            .catch(() => {
              this.showAlert("Cadastro", "Erro ao realizar Cadastro", "ok");
              this.navCtrl.pop();
            });  
        }
      });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
