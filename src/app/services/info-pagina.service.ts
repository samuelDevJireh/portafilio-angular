import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  equipo:any[]= [];


  constructor(private http:HttpClient) { 
    //console.log('info json cargado');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp : InfoPagina) =>{
      this.cargada=true;
      this.info=resp;
      //console.log(resp['email']);
    })
  }

  private cargarEquipo(){
    this.http.get('https://webdjango-d70b5-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp:any) =>{

      this.equipo=resp;
      this.cargada=true;
    
      //console.log(resp);
    })
  }
}
