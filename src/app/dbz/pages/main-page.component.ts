import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent {
  /**Inyeccion del servicio
   * A su vez sel servicio se cambio a privado
  */
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    /**... con los tres puntos usamos */
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
