import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { GenericPopupComponent } from './components/generic-popup/generic-popup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';





@NgModule({
  declarations: [GenericPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
		MatButtonModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatOptionModule,
    MatNativeDateModule,
    MatCardModule,
  ]
})
export class SharedModule { }
