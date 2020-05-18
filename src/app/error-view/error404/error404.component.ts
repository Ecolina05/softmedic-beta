import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  data: any;

  constructor() {
    this.data = {
      image: 'assets/images/error404.png',
      sizeImg: '1000',
      title: 'Error 404',
      information: 'Lo sentimos, la pagina que intentas acceder no existe. Verifica la URL o regresa a nuestra página principal.',
      buttonText: 'Pagina principal',
      buttonLink: '/login'
    }
  }

  ngOnInit(): void {
  }

}
