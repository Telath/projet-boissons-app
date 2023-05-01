import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boisson } from '../../models/boisson';

@Component({
  selector: 'app-boisson-card',
  templateUrl: './boisson-card.component.html',
  styleUrls: ['./boisson-card.component.scss']
})
export class BoissonCardComponent implements OnInit{

  @Input() selectedBoisson: Boisson;
  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
      this.received.emit(true);
  }

}


