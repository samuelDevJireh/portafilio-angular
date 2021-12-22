import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagina } from 'src/app/interface/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 

  constructor( public _service :InfoPaginaService,
               private router:Router) {
   
   }

  ngOnInit(): void {
  }

  buscarProducto(busqueda:string){
  // console.log(busqueda);
  if (busqueda.length < 1) {
    return;
  }
   this.router.navigate(['/search',busqueda])
  }

}
