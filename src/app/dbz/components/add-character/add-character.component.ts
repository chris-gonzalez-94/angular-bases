import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
/** */
  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();


  // Objeto
  public character: Character= {
    name: '',
    power:0
  };

  emitCharacter() : void{
/**debugger, nos ayuda a ver en que parte de la app necesitamos ver el funcionamiento */
    // 0debugger;

    console.log(this.character)

    if(this.character.name.length==0) return;
    this.onNewCharacter.emit(this.character);

    /**Si queremos limpiar un componente despues de inyectar informacion, le damos un valor prefijo a la variable */
    this.character.name=''
    this.character.power=0
  }
}
