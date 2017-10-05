
import {professionInterface} from "../data/Profession.interface";
import {AngularFireDatabase} from "angularfire2/database";
export class ProfessionsService{
  private favoriteProfession: professionInterface[] = [];




  addProfessionToFavorites(profession : professionInterface){
    this.favoriteProfession.push(profession);


  }

  removeProfessionToFavorites(profession : professionInterface){
    const position = this.favoriteProfession.findIndex((professionEl : professionInterface)=>{
      return professionEl.id == profession.id;
    });

    this.favoriteProfession.splice(position,1);


  }


  getFavoriteQuotes(){
    return this.favoriteProfession.slice();
  }



}
