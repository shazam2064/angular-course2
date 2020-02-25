import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA:number;
  operandoB:number;

  constructor() { }

  ngOnInit() {
  }

  onSumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
