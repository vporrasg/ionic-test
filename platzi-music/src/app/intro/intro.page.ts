import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [{
    title: "Este es el titulo",
    subTitle:"subtitulo",
    description:"descripcion",
    icon: "play"
  },
  {
    title: "Este es el titulo",
    subTitle:"subtitulo",
    description:"descripcion",
    icon: "play"
  },
  {
    title: "Este es el titulo",
    subTitle:"subtitulo",
    description:"descripcion",
    icon: "play"
  }]
  
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  finish(){
    this.storage.set('isIntroShowed', true)
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
