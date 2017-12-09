import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifService } from './services/gif.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    GifService
  ]
})
export class CoreModule { }
