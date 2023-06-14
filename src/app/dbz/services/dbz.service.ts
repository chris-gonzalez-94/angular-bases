import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

/** @Injectable es un decorador*/
@Injectable({
  providedIn: 'root'
})

export class DbzService {

    /**Creacion del arreglo character */
    public characters: Character[]=[{
      id: uuid(),
      name: 'Krillin',
      power: 10000
    },
    {
      id: uuid(),
      name:'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 14000
    }
  ];

  /**Para poder agregar datos a un arreglo usamos unshift o push
   * unshift, inserta nuevo elemtento al inicio de un arreglo
   * push, inserta nuevo elmento al funal de un arreglo
   */
  addCharacter(character:Character):void{
/**Aqui, se almacena los nuevos personajes que se agregan. en el form */
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    /**La de abajo, es lo mismo que arriba, esta opocion es mas resumida
     * A su vez usamos el operador spret de caracter, el cual toma todas las propiedades y esparcelar en el nuevo objeto que se creo(newCharacter)
     */
    const newCharacter: Character={id: uuid(), ...character}

// /////////////////////////////////////////////////////////////////////
    this.characters.push(newCharacter);
    console.log('MainPage');
    console.log(character);
  }
/*
  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }
*/

deleteCharacterById(id:string){
  this.characters = this.characters.filter(characters => characters.id !== id)
}

}
