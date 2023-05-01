import { Observable } from "rxjs";
import { Bouteille } from "src/app/bouteille/models/bouteille";

export interface Boisson{
  id: number;
  name:string;
  description:string;
  drinkSize:number;
  creationDate:string;
  bouteille:number;
}
