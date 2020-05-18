import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  identitiesType: string[] = [
    'RC - REGISTRO CIVIL',
    'TI - TARJETA DE IDENTIDAD',
    'CC - CÉDULA DE CIUDADANÍA',
    'CE - CÉDULA DE EXTRANJERÍA',
    'PA - PASAPORTE',
    'CD - CERNÉ DIPLOMÁTICO',
    'SC - SALVOCONDUCTO',
    'PE - PERMISO ESPECIAL DE PERMANENCIA',
    'CN - CERTIFICADO DE NACIDO VIVO',
    'AS - ADULTO SIN IDENTIFICACIÓN',
    'MS - MENOR SIN IDENTIFICACIÓN'
  ];
  goreType: string[] = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ];
  religion: string[] = [
    'Católico/a',
    'Cristiano/a',
    'Protestante',
    'Testigo de Jehová',
    'Otra religión',
    'Sin religión',
  ];
  maritalStatus: string[] = [
    'Soltero/a',
    'Comprometido/a',
    'En relación',
    'Casado/a',
    'Unión libre',
    'Separado/a',
    'Divorciado/a',
    'Viudo/a'
  ];
  race: string[] = [
    'Sin pertenencia étnica',
    'Afrocolombiano',
    'Indígena',
    'Raizal',
    'Palenquero',
    'Gitano',
    'Sin respuesta',
  ];


  constructor() { }

  getIdentitiesType() {
    return this.identitiesType;
  }

  getGoreType() {
    return this.goreType;
  }

  getReligion() {
    return this.religion;
  }

  getMaritalStatus() {
    return this.maritalStatus;
  }

  getRace() {
    return this.race;
  }
}
