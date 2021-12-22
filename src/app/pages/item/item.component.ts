import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetail } from 'src/app/interface/producto_detail.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto!: ProductoDetail;
  id!:string;

  constructor( private route:ActivatedRoute,//nos auxilia a obtener los parametros enviados
               public producService: ProductosService) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(parametros=>{ //recuperamos los parametros

      this.producService.cargarProductoId(parametros['id'])
        .subscribe((productoresponse:any)=>{

          this.producto=productoresponse;
          this.id=parametros['id'];
        });
     // https://webdjango-d70b5-default-rtdb.firebaseio.com/productos/prod-1
      //console.log(paramtros['id']);
    });
  }

}
