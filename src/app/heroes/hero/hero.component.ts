import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number =  45;

  /**Hacer el nombre en mayusculas */
  get capitalizedName(){
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  chageHero():void{
    this.name='Spiderman';
  }

  chageAge():void{
    this.age=15;
  }

  reset():void{
    this.name='ironman';
    this.age=45;
  }
}
