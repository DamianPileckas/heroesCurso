import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{
  
  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService  ){
  
  this.activatedRoute.params.subscribe(params =>{
    this.heroe = this._heroesService.getHeroe(params['id']);
  
  });
}


}
