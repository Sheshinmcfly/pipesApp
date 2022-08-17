import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Sergio';
  genero: string = 'masculino';
  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Sergio', 'Cristian'];
  clientesObj = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {

    if (this.nombre === 'Sergio') {

      this.nombre = 'María';
      this.genero = 'femenino';

    } else {

      this.nombre = 'Sergio';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Sergio',
    edad: 30,
    direccion: 'Santiago, Chile'
  }


  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]


  // AsyncPipe
  miObservable = interval(2000);

  valorPromesa = new Promise((res, rej) => {

    setTimeout(() => {
      
      res('Tenemos data de promesa');

    }, 3500);
  });
}
