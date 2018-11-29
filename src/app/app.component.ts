import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  myHero : Hero;
  heroes : Hero[];
  angularImagePath : string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Batman'),
      new Hero(2, 'Superman'),
      new Hero(3, 'Aquaman'),
      new Hero(4, 'Flash')
    ];
    this.myHero = this.heroes[0];
    this.angularImagePath = 'data:image/jpeg;base64,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';
  }

  deleteHero(hero : Hero) : void {
    this.heroes.splice(this.heroes.findIndex(x => x.id == hero.id), 1);
  }
}
