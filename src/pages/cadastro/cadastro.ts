import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
// import { ThrowStmt } from '@angular/compiler';
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
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
     private afAuth: AngularFireAuth) {
    
    // if(this.navParams.data.user){
    //   this.user = this.navParams.data.user;
    // }
    // else{
    //   this.user = new User();
    // }
  }

  showAlert(title: string, subTitle: string, bottons: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [bottons]
    });
    alert.present();
  }

  // save() {
  //   this.userProvider.get(this.user.userName) 
  //     .then((value) => {
  //       if(value != null){
  //         this.showAlert("Error", "Usuário já existe, tente outro!", "ok");
  //       }
  //       else{
  //         this.userProvider.insert(this.user)
  //           .then(() =>{
  //             this.showAlert("Cadastro", "Cadastro realizado com sucesso!", "ok");
  //             this.navCtrl.pop();
  //           })
  //           .catch(() => {
  //             this.showAlert("Cadastro", "Erro ao realizar Cadastro", "ok");
  //             this.navCtrl.pop();
  //           });  
  //       }
  //     });  
  // }

  async cadastrar(user: User) {
    try {
      const resultado = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(resultado);
      this.showAlert("Cadastro","realizado com sucesso", "ok");
      this.navCtrl.pop();
    }
    catch(e){
      this.showAlert("Cadastro","Error ao cadastrar usuário", "ok");
      console.error(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
