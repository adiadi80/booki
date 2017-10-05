import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { UsersPage } from './users-page';

@NgModule({
  declarations: [
    UsersPage,
  ],
/*
 imports: [
 IonicModule.forChild(UsersPage),
 ],
 */
  exports: [
    UsersPage
  ]
})
export class UsersPageModule {}
