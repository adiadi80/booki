import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PRegisterPage } from './p-register';

@NgModule({
  declarations: [
    PRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(PRegisterPage),
  ],
})
export class PRegisterPageModule {}
