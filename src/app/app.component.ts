import { Component } from '@angular/core';
import {Hero} from './hero';


@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
    {{ hero.id }} {{ hero.name }}  {{hero.Sclass}}
    </li>
  </ul>

  <app-click-me></app-click-me> <br> <br> <br>
  <app-keyup-V1></app-keyup-V1>
  <app-key-V2></app-key-V2>
  <app-key-V4></app-key-V4>
  <app-key-Enter></app-key-Enter>
  <app-loop-back></app-loop-back>
  <app-little-tour></app-little-tour>


`

})
export class AppComponent {
  
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm','Knight'),
    new Hero(13, 'Bombasto','Archer'),
    new Hero(15, 'Magneta','Cilic'),
    new Hero(20, 'Tornado','Knight')
  ];
  myHero = this.heroes[0];
}
