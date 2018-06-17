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
      bg: '../../../assets/vingo-home.png',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
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
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'vingo.car'
        },
        {
          toolTip: 'Sorry, this source code is private!',
          class: 'fab fa-github',
          href: ''
        }
      ]
    },
    {
      header: 'ScatterSchool',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'vingo.car'
        },
        {
          toolTip: 'Sorry, this source code is private!',
          class: 'fab fa-github',
          href: ''
        }
      ]
    },
    {
      header: 'BIM Earth',
      description: 'This is a project that I did, it was really fun and really cool. You should ask me about it our hire me please, thank you.',
      buttons: [
        {
          toolTip: 'Live Site',
          class: 'fas fa-external-link-alt',
          href: 'vingo.car'
        },
        {
          toolTip: 'Sorry, this source code is private!',
          class: 'fab fa-github',
          href: ''
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
