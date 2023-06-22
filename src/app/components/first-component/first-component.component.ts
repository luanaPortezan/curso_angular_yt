import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Portezan"
  age: number = 34
  job: string = "Programadora"

  constructor() { }

  ngOnInit(): void {
  }

}
