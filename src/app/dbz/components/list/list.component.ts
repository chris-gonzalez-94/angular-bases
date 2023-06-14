import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  /**Con el decorador @Input(), con este decorador sobre una propiedad, puede recibir la lista de caracteres del padre */
  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteId: EventEmitter<string>=new EventEmitter();


  onDeleteCharacter(id?: string): void{
    /**id se marco en opcional, en el if vemos si no existe, no lo manda a llamar
     * Si no hay un id, no hace nad
     */
    if(!id) return;
    this.onDeleteId.emit(id);
    // console.log({index});
  }


}
