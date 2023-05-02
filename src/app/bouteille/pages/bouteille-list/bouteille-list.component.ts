import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { Bouteille } from '../../models/bouteille';
import { BouteilleService } from '../../services/bouteille.service';
import { Router } from '@angular/router';
import { BouteilleFormComponent } from '../../components/bouteille-form/bouteille-form.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-bouteille-list',
  templateUrl: './bouteille-list.component.html',
  styleUrls: ['./bouteille-list.component.scss']
})

export class BouteilleListComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
	bouteilles$: Observable<Bouteille[]>;

	constructor(private bouteilleService: BouteilleService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private auth: AngularFireAuth){

	 }

	 ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.bouteilles$ = this.bouteilleService.get();
  }

  openBouteilleForm(bouteille?: Bouteille) {
    this.auth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['/sign-in']);
      }else{
    const dialogRef = this.dialog.open(BouteilleFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: bouteille ? false : true,
        bouteille: bouteille ? bouteille : undefined
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
  });
  }

  delete(id: number) {
    this.auth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['/sign-in']);
      }else{


    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cette bouteille ?',
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
          this.bouteilleService.delete(id)
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
    });

  }

  showBouteilleDetails(bouteilleId: number){
    this.router.navigate(['/bouteilles/'+ bouteilleId])
  }
 }
