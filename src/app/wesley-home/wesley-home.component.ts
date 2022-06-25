import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wesley-home',
  templateUrl: './wesley-home.component.html',
  styleUrls: ['./wesley-home.component.css'],
})
export class WesleyHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getDataHora() {
    let now = new Date();
    return (
      now.getDate() +
      '/' +
      now.getMonth() +
      '/' +
      now.getFullYear() +
      ' - ' +
      now.getHours() +
      ':' +
      now.getMinutes()
    );
  }
}
