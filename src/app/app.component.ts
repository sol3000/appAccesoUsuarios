import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string ="";
  apellido:string = ""; 

  empleados:Empleado[]=[ //array de empleados

    new Empleado("Sol","Solso","Presidente",100000),
    new Empleado("Ana","Salso","Contable",30000),
    new Empleado("Juan","Pamal","Administrativo",25000),
    new Empleado("Pepe","Pepel","Operario",15000),

    
  ];

//Con BananaInBox agregamos de forma bidireccinal datos, creamos las variables para poder 
//añadirlos del formulario al array
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){  //función para agregar un nuevo objeto empleado al array de empleados

    //Recogemos los datos de un nuevo elemento del formulario
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleados.push(miEmpleado); //agregamos el elemento al array

  }//fin de la función
  
  
  

  registrarUsuario(){//función para mostrar tras pulsar botón que se han introducido datos 
    //en el primer formulario de registro.

    this.registrado =true;
    this.mensaje = "Usuario registrado con éxito ";
  }


}
