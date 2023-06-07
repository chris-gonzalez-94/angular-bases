import { Component } from "@angular/core";

/*@Component({
  selector: 'app-counter',
  template: '<h1>Hola mundo</h1>'
})

export class CounterComponent{

}*/




@Component({
  selector: 'app-counter',
  template: `

  <h3>{{counter}}</h3>
  <!--Aqui estamos llamando el metodo que creamos en components.ts-->
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Resert</button>
  <button (click)="increaseBy(-1)">-1</button>


  `
})

export class CounterComponent {
  public title:string = 'Hola mundo';
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter+=value;
  }

  reset():void{
    this.counter=10;
  }
}
