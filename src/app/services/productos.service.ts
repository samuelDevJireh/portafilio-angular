import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:ProductoInterface[]=[];
  productosflitrados:ProductoInterface[]=[];
  cargando=true;

  constructor(private http:HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

   return new Promise((resolve,reject)=>{
    this.http.get('https://webdjango-d70b5-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp:any) => {
 
    this.productos=resp;
    this.cargando=false;
      //console.log(resp);
      // setTimeout(() => {
      //   this.cargando=false;    
      // }, 500);
    });
   });

   
  }

  cargarProductoId(id:string){
    return this.http.get(`https://webdjango-d70b5-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){


    if (this.productos.length == 0) {
      this.cargarProductos().then(()=>{
        this.productosflitrados= this.productos.filter(produc=> produc.categoria == termino || produc.titulo?.indexOf(termino));
    console.log(this.productosflitrados);
      })
    }else{
      this.productosflitrados= this.productos.filter(produc=> produc.categoria == termino || produc.titulo?.indexOf(termino));
      console.log(this.productosflitrados);
    }

   
  }

 
}
