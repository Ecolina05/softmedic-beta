import { Component, OnInit } from '@angular/core';
import { MainServices } from '../../services/main-services.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  identitiesType: string[];
  goreType: string[];
  religion: string[];
  maritalStatus: string[];
  race: string[];

  constructor(private ms: MainServices) {
    this.identitiesType = this.ms.cts.getIdentitiesType();
    this.goreType = this.ms.cts.getGoreType();
    this.religion = this.ms.cts.getReligion();
    this.maritalStatus = this.ms.cts.getMaritalStatus();
    this.race = this.ms.cts.getRace();
  }

  ngOnInit() {
  }

  /**
   * Function to cut characters of a word
   * @param value 
   */
  cutWord(value: string) {
    return value.slice(0, 2);
  }
}

