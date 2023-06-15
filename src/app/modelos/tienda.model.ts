export class Items {
    cantidad?: number;
    categoria?: string;
    codigo?: number;
    image?: string;
    nombre?: string;
    precio?: string;
    talla?: string;

    constructor(
        cantidad?: number,
        categoria?: string,
        codigo?: number,
        image?: string,
        nombre?: string,
        precio?: string,
        talla?: string
    ) {
        this.cantidad = cantidad
        this.categoria = categoria
        this.codigo = codigo
        this.image = image
        this.nombre = nombre
        this.precio = precio
        this.talla = talla
    }

}