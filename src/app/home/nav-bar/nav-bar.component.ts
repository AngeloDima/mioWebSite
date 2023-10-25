import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  abo() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 1.5;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


  cor() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 0.8;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }




  freel() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 6.1;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }



  contact() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 7.4;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


}



