// De esta manera se crera una modulo
import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from "@angular/common";

// Usamos el decorador @NgModule
@NgModule({
  declarations: [
    CounterComponent
  ],
  // Aqui exportamos los modulos
  exports: [
    CounterComponent
  ],
  imports:[
    CommonModule
  ]
})
export class CounterModule{

}
