import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Feriado{
  date:string;
  name:string;
  global:boolean;
}
@Injectable()
export class WesleyListService {
  feriados: Array<Feriado> =[];
  api='https://date.nager.at/api/v2/publicholidays/2020/US';


  constructor(private http:HttpClient) { }


  get(){
    this.http.get<Feriado>(this.api).subscribe((data) =>{
      if(data) {
        this.feriados.push(data);
      }
    })
  }
}