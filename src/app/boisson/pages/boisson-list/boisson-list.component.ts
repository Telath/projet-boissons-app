import { Component, OnDestroy, OnInit } from '@angular/core';
import { Boisson } from '../../models/boisson';
import { BoissonService } from '../../services/boisson.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boisson-list',
  templateUrl: './boisson-list.component.html',
  styleUrls: ['./boisson-list.component.scss']
})

export class BoissonListComponent implements OnInit {

	boissons$: Observable<Boisson[]>;

	constructor(private boissonService: BoissonService){

	 }

	 ngOnInit(): void {
	   this.boissons$ = this.boissonService.get();
	 }
 }
