import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bouteille } from '../models/bouteille';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable()
export class BouteilleService {

  constructor(private http: HttpClient) { }

  get() : Observable<Bouteille[]>{
    return this.http.get<Bouteille[]>(environment.iutApiBaseUrl+"/bouteilles");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.iutApiBaseUrl+"/bouteilles/"+id);
  }

  update(bouteille: Bouteille): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/bouteilles/"+bouteille.id, bouteille);
  }

  create(bouteille: Bouteille): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/bouteilles", bouteille);
  }

  getById(id: number): Observable<Bouteille>{
    return this.http.get<Bouteille>(environment.iutApiBaseUrl+"/bouteilles/"+id);
  }


}
