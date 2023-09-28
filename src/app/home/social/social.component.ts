import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  constructor() { }

  Linkedin() {
    window.open('https://www.linkedin.com/in/angelo-di-mauro-b26bb3258/', '_blank');
  }

  Instagram() {
    window.open('https://www.instagram.com/angelo_dimauro_/', '_blank');
  }

  WhatsApp() {
    window.alert("ciao")
  }
}
