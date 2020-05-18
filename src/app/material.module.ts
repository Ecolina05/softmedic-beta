import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatTableModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatSelectModule,
        MatTabsModule,
        MatDatepickerModule,
        MatSidenavModule,
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatMenuModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatTableModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatSelectModule,
        MatTabsModule,
        MatDatepickerModule,
        MatSidenavModule,
    ]
})

export class MateriaModule { }