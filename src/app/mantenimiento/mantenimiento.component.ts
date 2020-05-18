import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      image: 'assets/images/mantenimiento.png',
      sizeImg: '350',
      title: 'Sitio web en mantenimiento.',
      information: 'Disculpe, estamos trabajando en la plataforma en este momento, intentelo más tarde.',
    }
  }

  ngOnInit(): void {
  }

}
