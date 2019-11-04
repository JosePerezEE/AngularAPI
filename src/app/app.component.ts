import { Component, OnInit } from '@angular/core';
import {ServicioApiService} from './Servicio/servicio-api.service'

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API de Weather Map';
  constructor(private ServicioApiService: ServicioApiService) { }

  ngOnInit(){

  $(document).ready(function () {     
    $('#cambio').change(function(){
    var cod = $(this).val();
    $('#codigo').val(cod);
    })
    });
  }
  clima;
  getClima(codigo:string){
    this.ServicioApiService.getclima(codigo).subscribe(
      res => this.clima = res,
      err => console.log(err)
    )
  }

  submitCodigo(Codigo: HTMLInputElement){
    this.getClima(Codigo.value);
    Codigo.value='';
    Codigo.focus();

    return false;
  }

}
