import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, 
    private afAuth: AngularFireAuth) {
      // this.user = new User(); 
  }

   showAlert(title: string, subTitle: string, bottons: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [bottons]
    });
    alert.present();
  }

  async login(user: User) {
    try{
      const resultado = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(resultado);
      this.showAlert("Login", "Login Realizado com Sucesso", "ok");
      this.navCtrl.push("PowPage");
    }
    catch(e){
      console.log(e);
      this.showAlert("Login", e, "Ok");
    }
  }

  goCadastro(){
    this.navCtrl.push("CadastroPage");
  }

  // public login() {  
    
  //   this.userProvider.get(this.user.userName)
  //     .then((userLogin) =>{
  //       console.log(" test " + userLogin.userName);
  //       if(userLogin.password == this.user.password){
  //         this.toast.create({ message: 'Login Realizado com Sucesso!', duration: 3000, position: 'button' }).present();
  //         this.navCtrl.push("PowPage");
  //       }
  //       else{
  //         this.toast.create({ message: 'Login ou senha estão errado!', duration: 3000, position: 'button' }).present();
  //       }
  //     })
  //     .catch(() => {
  //       this.toast.create({ message: 'Erro ao realizar login.', duration: 3000, position: 'botton'}).present();
  //     });
  // }

}
