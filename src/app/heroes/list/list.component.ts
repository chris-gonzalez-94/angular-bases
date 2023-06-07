import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

// ngFor, es un ciclo for, pero del lado del tamplete
export class ListComponent {
  public heroNames:string[]=['Spiderman','IronMan','Hulk','Thor'];
  public deletedHero?:string='';

  removeLastHero():void{
    //LA variable reservada shift, borra el primer elemento de un arreglo
    // Pop, borra el ultimo elemnto de un arreglo.
    this.deletedHero = this.heroNames.pop();
    // console.log(deletedHero);
  }
}
