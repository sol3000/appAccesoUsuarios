import { Component, Input, OnInit } from '@angular/core';//importamos Input
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
//con @input pasamos información de padre a hijo y viceversa
  @Input() listaEmpleado:Empleado; //Declaramos la variable que será un Empleado
  @Input() i:number; //Declaramos la variable i que será número

  constructor() { }

  ngOnInit(): void {
  }

}
