import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Routing */
import { PacientesRoutingModule } from './pacientes-routing.module';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaModule } from '../material.module';

/* Feature Modules */
import { ShareModule } from '../share.module';

/* Components */
import { SearchPacientesComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    SearchPacientesComponent,
    CreateComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ShareModule,
    ReactiveFormsModule,
    MateriaModule,
    PacientesRoutingModule
  ]
})

export class PacientesModule { }
