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

  skillData = [
    {
      header: 'CSS',
      items: [
        {
          class: 'css3-icon',
          text: 'CSS3'
        },
        {
          class: 'sass-icon',
          text: 'SASS3'
        },
        {
          class: 'angular-icon',
          text: 'Angular Material'
        },
        {
          class: 'bootstrap-icon',
          text: 'Bootstrap'
        },
        {
          class: 'materialize-icon',
          text: 'Materialize'
        },
        {
          class: 'fas fa-desktop',
          text: 'Responsive Design'
        },
      ]
    },
    {
      header: 'HTML',
      items: [
        {
          class: 'html5-icon',
          text: 'HTML5'
        },
        {
          class: 'react-icon',
          text: 'JSX'
        },
        {
          class: 'jekyll-icon',
          text: 'Jekyll'
        }
      ]
    },
    {
      header: 'JS',
      items: [
        {
          class: 'js-icon',
          text: 'Javascript'
        },
        {
          class: 'ts-icon',
          text: 'Typescript'
        },
        {
          class: 'angular-icon',
          text: 'Angular'
        },
        {
          class: 'ionic-icon',
          text: 'Ionic'
        },
        {
          class: 'react-icon',
          text: 'React'
        },
        {
          class: 'jquery-icon',
          text: 'jQuery'
        },
        {
          class: 'node-icon',
          text: 'Node.js'
        }
      ]
    },
    {
      header: 'Other',
      items: [
        {
          class: 'sketch-icon',
          text: 'Sketch 3'
        },
        {
          class: 'git-icon',
          text: 'Git'
        },
        {
          class: 'fab fa-gitlab',
          text: 'GitLab'
        },
        {
          class: 'npm-icon',
          text: 'NPM'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
