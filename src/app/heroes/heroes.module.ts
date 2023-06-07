// De esta manera se crera una modulo
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";

// Usamos el decorador @NgModule
@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  // Aqui exportamos los modulos
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
