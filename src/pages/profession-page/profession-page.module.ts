import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { ProfessionPage } from './profession-page';

@NgModule({
  declarations: [
    ProfessionPage,
  ],
  /*
   imports: [
   IonicModule.forChild(ProfessionPage),
   ],
   */
  exports: [
    ProfessionPage
  ]
})
export class ProfessionPageModule {}
