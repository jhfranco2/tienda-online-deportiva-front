import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Items } from '../modelos/tienda.model';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url = 'http://localhost:8080/'
  constructor(private http:HttpClient) { }

  get(){
   return  this.http.get<Items[]>(this.url+'items');
  }

}
