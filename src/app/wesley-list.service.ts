import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Feriado {
  date: string;
  name: string;
  global: string;
}
@Injectable()
export class WesleyListService {
  feriados: Array<Feriado> = [];
  constructor(private http: HttpClient) {}

  get() {
    this.http
      .get<Feriado>('https://date.nager.at/api/v2/publicholidays/2020/US')
      .subscribe((data) => {
        this.feriados.push(data[0]);
      });
  }
}
