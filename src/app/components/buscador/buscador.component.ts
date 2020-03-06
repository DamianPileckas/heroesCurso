import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  heroes:any[] = [];
  termino:string;
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private _heroeService:HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params =>{
    this.termino = params['termino'];
    this.heroes = this._heroeService.buscarHeroe(params['termino']);
    console.log(this.heroes);
  });
  }
  
  obtenerHeroe(): Heroe{
    let heroe:Heroe;
    heroe = this.heroes[0];
    
    return heroe;
  }

}
