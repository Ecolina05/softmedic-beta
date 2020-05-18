import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {

  progress: number;
  intervalProgress: any;
  intervalMessage: any;
  randomNumber: number;
  messages: Array<String>;
  positionMessage: number;
  currentMessage: any = 'Creando sesión...';

  constructor(private router: Router) {
    this.progress = 0;
    this.positionMessage = 0;
    this.messages = ['Cargando recursos...', 'Obteniendo información de usuario...', 'Cargando configuración...', 'Terminando...', 'Bienvenido a Softmedic...'];
  }

  ngOnInit(): void {
    this.intervalProgress = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * (40 - 1) + 1);
    }, 300);
    this.intervalMessage = setInterval(() => {
      this.getMessage();
    }, 1000)
    this.increaseProgress();
  }

  ngOnDestroy() {
    this.progress = 0;
    clearInterval(this.intervalProgress);
    clearInterval(this.intervalMessage);
  }

  /**
   * Funtion to increase the value of progress bar
   */
  increaseProgress(): void {
    let interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);
        this.router.navigate(['/home']);
      } else {
        this.progress += this.randomNumber;
      }
    }, 650);
  }

  /**
   * Funtion to get a random message
   */
  getMessage(): any {
    let text = document.getElementById('currentMessage');
    this.currentMessage = this.messages[this.positionMessage++];
    if (text.className.indexOf('fadeIn') > -1)
      text.classList.remove('fadeIn');
    else
      text.classList.add('fadeIn');
  }
}