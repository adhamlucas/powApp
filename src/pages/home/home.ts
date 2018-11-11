import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { UserProvider, User} from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;

  constructor(public navCtrl: NavController, private userProvider: UserProvider,
    private toast: ToastController) {
      this.user = new User(); 
  }

  goCadastro(){
    this.navCtrl.push("CadastroPage");
  }

  public login() {  
    
    this.userProvider.get(this.user.userName)
      .then((userLogin) =>{
        console.log(" test " + userLogin.userName);
        if(userLogin.password == this.user.password){
          this.toast.create({ message: 'Login Realizado com Sucesso!', duration: 3000, position: 'button' }).present();
          this.navCtrl.push("PowPage");
        }
        else{
          this.toast.create({ message: 'Login ou senha estão errado!', duration: 3000, position: 'button' }).present();
        }
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao realizar login.', duration: 3000, position: 'botton'}).present();
      });
  }

}
