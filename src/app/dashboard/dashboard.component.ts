import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: any;

  constructor() {
    this.cards = [
      {
        icon: 'fas fa-user-alt',
        colorIcon: 'text-blue-600',
        value: 32,
        name: 'Pacientes afiliados',
        color: 'primary'
      },
      {
        icon: 'fa fa-stethoscope',
        colorIcon: 'text-red-600',
        value: 20,
        name: 'Médicos afiliados',
        color: 'warn'
      },
      {
        icon: 'fas fa-user-nurse',
        colorIcon: 'text-orange-600',
        value: 12,
        name: 'Empleados registrados',
        color: 'accent'
      },
      {
        icon: 'fas fa-user-friends',
        colorIcon: 'text-gray-600',
        value: 50,
        name: 'Total personas',
        color: 'blue-grey'
      }
    ];
  }

  ngOnInit(): void {
  }

}
