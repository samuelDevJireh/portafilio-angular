import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;
  constructor(private http:HttpClient) { 
    //console.log('info json cargado');

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp : InfoPagina) =>{
      this.cargada=true;
      this.info=resp;
      //console.log(resp['email']);
    })
  }
}
