import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boisson } from '../models/boisson';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable()
export class BoissonService {

  constructor(private http: HttpClient) { }

  get() : Observable<Boisson[]>{
    return this.http.get<Boisson[]>(environment.iutApiBaseUrl+"/boissons");
  }


}
