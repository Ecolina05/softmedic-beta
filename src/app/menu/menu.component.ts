import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() component: string;

  constructor() {
  }

  ngOnInit(): void {
    this.component ? this.component = this.component : this.component = 'home';
  }

}
