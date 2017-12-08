import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { LearnPage } from '../learn/learn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  gamesPage = GamesPage;
  learnPage = LearnPage;

  constructor(public navCtrl: NavController) {

  }
}
