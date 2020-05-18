import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-pacientes',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPacientesComponent implements OnInit {

  searchPatient: FormControl;
  patients: string[] = ['Ernesto', 'Vale', 'Jesu'];
  filteredOptions: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {
    this.searchPatient = new FormControl();
    this.filteredOptions = this.searchPatient.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.patients.filter(option => option.toLowerCase().includes(filterValue));
  }

}
