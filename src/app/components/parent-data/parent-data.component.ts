import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // iniciado com uma string vazia
  @Input() userData!: { email: string, role: string } //! é para iniciar a propriedade

  constructor() { }

  ngOnInit(): void {
  }

}
