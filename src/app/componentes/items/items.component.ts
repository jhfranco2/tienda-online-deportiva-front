import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/modelos/tienda.model';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  implements OnInit{

  items: Items[] = [];
  constructor(private tiendaService: TiendaService) { }

  ngOnInit(){
    this.getItems();
  }
  getItems(){
    this.tiendaService.get().subscribe((response:any | null)=>{
      this.items = response;
      console.log(this.items);
    })
  }
  

}
