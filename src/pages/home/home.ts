import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

title:string='Tour of Heroes';
heroes:string[]=['Windstorm','Bombasto','Magneta','Tornado'];
myHero:string='';
  constructor(public navCtrl: NavController) {
    this.myHero=this.heroes[1];
  }

}
