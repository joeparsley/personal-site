import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {
      title: 'Linkedin',
      icon: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/joe-parsley/',
      download: false
    },
    {
      title: 'Github',
      icon: 'fab fa-github',
      href: 'https://github.com/joeparsley',
      download: false
    },
    {
      title: 'resume',
      icon: 'fas fa-file-alt',
      href: './../../../assets/joeparsley-resume.pdf',
      download: true
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  test() {
    console.log(this.navLinks);
  }

}
