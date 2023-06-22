import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../modelos/tienda.model';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url = 'http://20.206.79.159:8080'
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>(`${this.url}/items`);
  }

  crear(item: Items) {
    const formData = new FormData();

    if (item.imagen) {
  
      formData.append('imagen', item.imagen);
    }

    if (item.cantidad) {
      formData.append('cantidad', item.cantidad.toString());
    }


    if (item.codigo) {
      formData.append('codigo', item.codigo.toString());
    }

    if (item.nombre) {
      formData.append('nombre', item.nombre);
    }

    if (item.precio) {
      formData.append('precio', item.precio);
    }

    if (item.talla) {
      formData.append('talla', item.talla);
    }

    if (item.color) {
      formData.append('color', item.color);
    }

    console.log("soy el formdata")
    formData.forEach((value: Blob | string, key: string) => {
      console.log(`Clave: ${key}, Valor: ${value}`);
    });
    
    
    return this.http.post<any>(`${this.url}/items`, formData);
  }

}
