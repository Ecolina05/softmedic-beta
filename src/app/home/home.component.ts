import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hours: any;
  minutes: any;
  seconds: any;
  timeNow: string;

  constructor() { }

  ngOnInit(): void {
    this.getCurrentTime();
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  /**
   * Function to get time
   */
  getCurrentTime(): string {
    let time = new Date();
    this.hours = time.getHours().toString().length < 2 ? `0${time.getHours()}` : time.getHours();
    this.minutes = time.getMinutes().toString().length < 2 ? `0${time.getMinutes()}` : time.getMinutes();
    this.seconds = time.getSeconds().toString().length < 2 ? `0${time.getSeconds()}` : time.getSeconds();
    this.timeNow = `${this.hours}:${this.minutes}:${this.seconds}`;

    return this.timeNow;
  }

  /**
   * Function to return a greeting depending on the hour
   */
  getMessagaByHour(): string {
    if (parseInt(this.hours) >= 0 && parseInt(this.hours) < 12) return 'Buenos días';
    if (parseInt(this.hours) >= 12 && parseInt(this.hours) < 18) return 'Buenas tardes';
    if (parseInt(this.hours) >= 18 && parseInt(this.hours) <= 23) return 'Buenas noches';
  }
}