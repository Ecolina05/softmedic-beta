import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentComponent: string;
  categoriaMenu: string = 'pacientes';

  rutas: any[] = [
    {
      icono: 'fas fa-search',
      nombreRuta: 'Búsqueda',
      ruta: '/pacientes/buscar'
    },
    {
      icono: 'fas fa-user-plus',
      nombreRuta: 'Registrar',
      ruta: '/pacientes/crear'
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      this.currentComponent = this.router.url;
    });
  }

  showNavbar() {
    if (['/', '/splash', '/login', '/home', '/mantenimiento'].includes(this.currentComponent))
      return false;
    else
      return true;
  }

  showSidenav() {
    if (['/', '/splash', '/login', '/home', '/mantenimiento', '/dashboard'].includes(this.currentComponent))
      return false;
    else
      return true;
  }
}
