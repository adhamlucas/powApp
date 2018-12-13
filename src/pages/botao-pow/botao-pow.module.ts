import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotaoPowPage } from './botao-pow';
import { PowPage } from '../pow/pow';

@NgModule({
  declarations: [
    BotaoPowPage
  ],
  imports: [
    IonicPageModule.forChild(BotaoPowPage),
  ],
})
export class BotaoPowPageModule {}
