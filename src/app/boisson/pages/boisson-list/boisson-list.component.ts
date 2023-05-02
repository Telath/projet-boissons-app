import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { Boisson } from '../../models/boisson';
import { BoissonService } from '../../services/boisson.service';
import { Router } from '@angular/router';
import { BoissonFormComponent } from '../../components/boisson-form/boisson-form.component';

@Component({
  selector: 'app-boisson-list',
  templateUrl: './boisson-list.component.html',
  styleUrls: ['./boisson-list.component.scss']
})

export class BoissonListComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
	boissons$: Observable<Boisson[]>;

	constructor(private boissonService: BoissonService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router){

	 }

	 ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.boissons$ = this.boissonService.get();
  }

  openBoissonForm(boisson?: Boisson) {
    const dialogRef = this.dialog.open(BoissonFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: boisson ? false : true,
        boisson: boisson ? boisson : undefined
      }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.fetchData();
        }
      });
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette boisson ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    })

    ref.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.boissonService.delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success']
              });
              this.fetchData();
            });
        }
      });

  }

  showBoissonDetails(boissonId: number){
    this.router.navigate(['/boissons/'+ boissonId])
  }
 }
