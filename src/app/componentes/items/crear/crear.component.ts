import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/modelos/tienda.model';
import { TiendaService } from 'src/app/servicios/tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  item: Items = new Items();
  imagenSeleccionada: File = new File([], 'sin_imagen.png');

  constructor(private tiendaService: TiendaService, private router: Router) { }

  ngOnInit(): void {

  }

  enviarItem() {
    this.tiendaService.crear(this.item).subscribe((
      response) => {
      console.log(response);
      this.router.navigate(['']);
    }, (e: Error) => {
      console.log(this.item);
      console.log(e);
    });
  }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
    this.item.imagen = this.imagenSeleccionada;

  }
}
