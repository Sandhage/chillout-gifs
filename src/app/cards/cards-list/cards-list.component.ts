import { Component, OnInit } from '@angular/core';
import { GifService } from '../../core/services/gif.service';
import { CardComponent } from './card/card.component';
import { GifClass } from '../../core/models/gif.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  gifs: GifClass[] = [];

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getGifs();
  }

  getGifs() {
    this.gifService.requestGifsFromReddit().subscribe(
      resp => {
        const responses = _.filter(resp, gif => {
          return gif['data'].is_reddit_media_domain;
        });

        for (const obj of responses) {
          try {
            const gif = GifClass.deserialize(obj);
            this.gifs.push(gif);
          } catch (e) {
            console.error(e);
          }
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
