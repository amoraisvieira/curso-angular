import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name : string = 'Amanda';
  age : number = 20;
  job = 'Software Engineer';
  hobbie = ['Treinar', 'Ler', 'Ouvir música'];
  car = {
    name: "Meca",
    year: 2019
  }


  constructor() { }

  ngOnInit(): void {
  }

}
