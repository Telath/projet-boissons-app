import { BouteilleService } from '../../services/bouteille.service';
import { Bouteille } from '../../models/bouteille';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface BouteilleFormData {
  isCreateForm: boolean;
  bouteille: Bouteille;
}
@Component({
  selector: 'app-bouteille-form',
  templateUrl: './bouteille-form.component.html',
  styleUrls: ['./bouteille-form.component.scss']
})
export class BouteilleFormComponent implements OnDestroy{

  private destroy$: Subject<boolean> = new Subject<boolean>();

  bouteilleForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
  });

  constructor(public dialogRef: MatDialogRef<BouteilleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BouteilleFormData, private fb: FormBuilder,
    private bouteilleService : BouteilleService, private _snackBar: MatSnackBar){

      if(!data.isCreateForm){
        this.setBouteilleForm(data.bouteille);
      }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setBouteilleForm(bouteille: Bouteille) {
    this.bouteilleForm.setValue({
      id: bouteille.id,
      name: bouteille.name
    });
  }

  get title(){
    if(this.data.isCreateForm){
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName(){
    if(this.data.isCreateForm){
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit(){
    if(this.bouteilleForm.valid){
      if(this.data.isCreateForm){
        this.bouteilleForm.value.id = Date.now() + Math.random();
        this.bouteilleService.create(this.bouteilleForm.value as Bouteille)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.bouteilleService.update(this.bouteilleForm.value as Bouteille)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });
          this.dialogRef.close(true);
        });
      }
    }
  }


}
