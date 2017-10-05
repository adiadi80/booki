import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { ProfessionsPage } from './professions-page';

@NgModule({
  declarations: [
    ProfessionsPage,
  ],
  /*
   imports: [
   IonicModule.forChild(ProfessionsPage),
   ],
   */
  exports: [
    ProfessionsPage
  ]
})
export class ProfessionsPageModule {}
