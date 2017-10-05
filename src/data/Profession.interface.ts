import {Location} from "../models/location";
import {myDateTime} from "../models/myDateTime";

export interface professionInterface{
  id: string;
  person: string;
  text :string;
  pic: string;
  location: Location;
  cname: string;
  dateTime :myDateTime;
}
