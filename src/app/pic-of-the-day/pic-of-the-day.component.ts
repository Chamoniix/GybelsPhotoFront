import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Post} from "../post.class";

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.css']
})
export class PicOfTheDayComponent implements OnInit {

  public isMenuOpened = false;
  public post = new Post();


  constructor(private http: Http) {
    this.post.id = 1;
    this.post.description = 'Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii ' +
      'adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet ' +
      'minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam' +
      'viri et inopes' +
      'quam opulenti et calamitosi quam ii qui putentur beati.';
    this.post.titre = 'Titre';
    this.post.url = 'src/ressources/img/wallhaven-680441.jpg'; //HUG_6032-1.jpg - MAR_5586.JPG wallhaven-680441.jpg
    this.post.date_creation = new Date();
    this.post.auteur = 'Hugo';
    this.getData();
  }

  ngOnInit() {
  }


  private getData() {
    return this.http.get('http://localhost:8080/api/post/1').subscribe( data => {
      console.log(data);
    });
  }

  public closeNav() {
    this.isMenuOpened = false;
  }
  public openNav() {
    this.isMenuOpened = true;
  }

  public navigateTo(route: string) {

  }

}