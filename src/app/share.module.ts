import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ]
})
export class ShareModule { }
