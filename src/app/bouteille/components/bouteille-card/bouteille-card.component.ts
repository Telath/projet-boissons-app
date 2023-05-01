import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bouteille } from '../../models/bouteille';

@Component({
  selector: 'app-bouteille-card',
  templateUrl: './bouteille-card.component.html',
  styleUrls: ['./bouteille-card.component.scss']
})
export class BouteilleCardComponent implements OnInit{

  @Input() selectedBouteille: Bouteille;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }

}


