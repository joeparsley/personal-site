import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardData = [
    {
      header: 'Vingo',
      bg: '../../../assets/vingo-worth.png',
      bg2: '../../../assets/vingo-home.png',
      description: 'For this client I was responsible for building the front-end of their consumer phone app based off of designs from their designer. After I finished their phone app I was able to go on and build out their consumer and dealership facing websites. I worked closely with all members of the Vingo team to make sure the product I delivered to them was exactly what they asked for.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'https://vingo.car/'
        },
        {
          toolTip: 'Sorry, this source code is private!',
          class: 'fab fa-github',
          href: ''
        }
      ]
    },
    {
      header: 'Flight',
      bg: '../../../assets/flight.png',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'https://flight.run/'
        },
        {
          toolTip: 'Source Code',
          class: 'fab fa-github',
          href: 'https://github.com/Methodician/flight.run'
        }
      ]
    },
    {
      header: 'ScatterSchool',
      bg: '../../../assets/scatterschool.png',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'https://scatterschool.com/'
        },
        {
          toolTip: 'Source code',
          class: 'fab fa-github',
          href: 'https://github.com/Methodician/ScatterSchool'
        }
      ]
    },
    {
      header: 'BIM Earth',
      bg: '../../../assets/bimearth.png',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'https://bimearth.com/'
        },
        {
          toolTip: 'Source Code',
          class: 'fab fa-github',
          href: 'https://github.com/Methodician/BIM-Earth'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
