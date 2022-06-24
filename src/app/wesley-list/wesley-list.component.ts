import { Component, OnInit } from '@angular/core';
import { WesleyListService } from '../wesley-list.service';

@Component({
  selector: 'app-wesley-list',
  templateUrl: './wesley-list.component.html',
  styleUrls: ['./wesley-list.component.css'],
})
export class WesleyListComponent implements OnInit {
  constructor(public feriados: WesleyListService) {}

  ngOnInit() {
    
  }

  getFeriados() {
    return this.feriados.feriados;
  }
}
