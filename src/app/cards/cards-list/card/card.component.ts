import { Component, Input, OnInit } from '@angular/core';
import { GifClass } from '../../../core/models/gif.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() gif: GifClass;

  showHover: boolean = false;

  constructor() { }

  ngOnInit() { }

}
