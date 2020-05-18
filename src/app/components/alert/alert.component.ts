import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() description: string;

  typeAlert: string;
  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.getClassByType();
  }

  getClassByType(): void {
    switch (this.type) {
      case 'info':
        this.typeAlert = 'bg-blue-100 le-border-top-blue';
        this.icon = 'fas fa-info-circle text-blue-500';
        break;
      case 'success':
        this.typeAlert = 'bg-teal-100 le-border-top-teal';
        this.icon = 'fas fa-check-circle text-teal-500';
        break;
      case 'warning':
        this.typeAlert = 'bg-orange-100 le-border-top-orange';
        this.icon = 'fas fa-exclamation-circle text-orange-500';
        break;
      case 'error':
        this.typeAlert = 'bg-red-100 le-border-top-red';
        this.icon = 'fas fa-times-circle text-red-500';
        break;
      case 'secondary':
        this.typeAlert = 'bg-gray-200 le-border-top-gray';
        this.icon = 'text-gray-500';
        break;
    }
  }

}
