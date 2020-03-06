import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe: any = {};
  @Input() index: number;
  heroes:Heroe[];
  constructor(private router:Router, private _heroesService:HeroesService) { }
    
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  
  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
  }
}
