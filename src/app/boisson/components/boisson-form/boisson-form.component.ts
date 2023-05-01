import { BoissonService } from './../../services/boisson.service';
import { Boisson } from '../../models/boisson';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bouteille } from 'src/app/bouteille/models/bouteille';
import { BouteilleService } from 'src/app/bouteille/services/bouteille.service';

export interface BoissonFormData {
  isCreateForm: boolean;
  boisson: Boisson;
}
@Component({
  selector: 'app-boisson-form',
  templateUrl: './boisson-form.component.html',
  styleUrls: ['./boisson-form.component.scss']
})
export class BoissonFormComponent implements OnDestroy{

  private destroy$: Subject<boolean> = new Subject<boolean>();

  bouteilles$: Observable<Bouteille[]>;

  boissonForm = this.fb.group({
    id: [0, [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    bouteille: [0, [Validators.required]],
    drinkSize: [0, [Validators.required]],
    creationDate: ['', [Validators.required]],
  });

  constructor(public dialogRef: MatDialogRef<BoissonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoissonFormData, private fb: FormBuilder,
    private boissonService : BoissonService, private _snackBar: MatSnackBar, private bouteilleService : BouteilleService){

      if(!data.isCreateForm){
        this.setBoissonForm(data.boisson);
      }
  }

  ngOnInit(): void{
    this.bouteilles$ = this.bouteilleService.get();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setBoissonForm(boisson: Boisson) {
    this.boissonForm.setValue({
      id: boisson.id,
      name: boisson.name,
      description: boisson.description,
      bouteille: boisson.bouteille,
      drinkSize: boisson.drinkSize,
      creationDate: boisson.creationDate
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
    if(this.boissonForm.valid){
      this.boissonForm.value.creationDate = new Date(this.boissonForm.value.creationDate).toISOString();
      if(this.data.isCreateForm){
        this.boissonForm.value.id = Date.now() + Math.random();
        this.boissonService.create(this.boissonForm.value as Boisson)
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          this._snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success']
          });

          this.dialogRef.close(true);
        });
      }else{
        this.boissonService.update(this.boissonForm.value as Boisson)
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
