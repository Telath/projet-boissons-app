import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoissonService } from '../../services/boisson.service';
import { Boisson } from '../../models/boisson';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boisson-details',
  templateUrl: './boisson-details.component.html',
  styleUrls: ['./boisson-details.component.scss']
})

export class BoissonDetailsComponent implements OnInit{

  boissonId: number;
  boisson$: Observable<Boisson>;

  constructor(private route: ActivatedRoute, private boissonService: BoissonService, private location: Location){
    this.boissonId = +this.route.snapshot.paramMap.get('id') ;
  }

  ngOnInit(): void{
    if (this.boissonId) {
      this.boisson$ = this.boissonService.getById(this.boissonId);
    }
  }

  goBack(){
    this.location.back();
  }

  showRecivedValue(value: boolean){
    console.log(value)
  }

}
