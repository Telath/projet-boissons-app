import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BouteilleService } from '../../services/bouteille.service';
import { Bouteille } from '../../models/bouteille';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bouteille-details',
  templateUrl: './bouteille-details.component.html',
  styleUrls: ['./bouteille-details.component.scss']
})

export class BouteilleDetailsComponent implements OnInit{

  bouteilleId: number;
  bouteille$: Observable<Bouteille>;

  constructor(private route: ActivatedRoute, private bouteilleService: BouteilleService, private location: Location){
    // route.params.subscribe(params =>{
    //   this.bouteilleId = params['id'];
    // })
    this.bouteilleId = +this.route.snapshot.paramMap.get('id') ;
  }

  ngOnInit(): void{
    if (this.bouteilleId) {
      this.bouteille$ = this.bouteilleService.getById(this.bouteilleId);
    }
  }

  goBack(){
    this.location.back();
  }

  showRecivedValue(value: boolean){
    console.log(value)
  }

}
