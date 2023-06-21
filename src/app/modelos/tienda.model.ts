export class Items {
    cantidad?: number;
    codigo?: number;
    imagen?: File;
    nombre?: string;
    precio?: string;
    talla?: string;
    color?:string;

    constructor(
        cantidad?: number,
        codigo?: number,
        imagen?: any,
        nombre?: string,
        precio?: string,
        talla?: string,
        color?: string
    ) {
        this.cantidad = cantidad
        this.codigo = codigo
        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
        this.talla = talla
        this.color = color
    }

}