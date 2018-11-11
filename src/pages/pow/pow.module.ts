import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PowPage } from './pow';

@NgModule({
  declarations: [
    PowPage,
  ],
  imports: [
    IonicPageModule.forChild(PowPage),
  ],
})
export class PowPageModule {}
