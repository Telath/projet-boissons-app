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

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.iutApiBaseUrl+"/boissons/"+id);
  }

  update(boisson: Boisson): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/boissons/"+boisson.id, boisson);
  }

  create(boisson: Boisson): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/boissons", boisson);
  }

  getById(id: number): Observable<Boisson>{
    return this.http.get<Boisson>(environment.iutApiBaseUrl+"/boissons/"+id);
  }


}
