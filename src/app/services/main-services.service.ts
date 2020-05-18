import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class MainServices {

  constructor(public cts: ConstantsService) { }
}
