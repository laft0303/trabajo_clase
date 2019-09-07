import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismo-luis',
  templateUrl: './turismo-luis.page.html',
  styleUrls: ['./turismo-luis.page.scss'],
})
export class TurismoLuisPage implements OnInit {

  constructor() { }

  lugar = [
    {
      nombre : 'Cartagena',
      // tslint:disable-next-line: max-line-length
      descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
      imagen: 'assets/cartagena.jpg'
    },
    {
      nombre : 'Bogota',
      // tslint:disable-next-line: max-line-length
      descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
      imagen: 'assets/bogota.jpg'
    },
    {
      nombre : 'Cali',
      // tslint:disable-next-line: max-line-length
      descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
      imagen: 'assets/cali.jpg'
    },
    {
      nombre : 'Medellin',
      // tslint:disable-next-line: max-line-length
      descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
      imagen: 'assets/medellin.jpg'
    },
    {
      nombre : 'Pasto',
      // tslint:disable-next-line: max-line-length
      descripcion : 'Según la historia el pueblo se llamaba Porto Rico (puerto rico), hasta que el 1850 se convirtió en un paraje donde se desembarcaban y comer',
      imagen: 'assets/pasto.jpg'
    },
    ];

  ngOnInit() {
  }

}
