import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  abo() {
    // Calcola la percentuale dello scorrimento
    const windowHeight = window.innerHeight;
    const scrollPercentage = 1.5; // Puoi impostare la percentuale desiderata

    // Sposta la pagina in base alla percentuale
    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth' // Questo rende lo scorrimento animato
    });
  }


  cor() {
    // Calcola la percentuale dello scorrimento
    const windowHeight = window.innerHeight;
    const scrollPercentage = 0.8; // Puoi impostare la percentuale desiderata

    // Sposta la pagina in base alla percentuale
    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth' // Questo rende lo scorrimento animato
    });
  }




  freel() {
    // Calcola la percentuale dello scorrimento
    const windowHeight = window.innerHeight;
    const scrollPercentage = 6.1; // Puoi impostare la percentuale desiderata

    // Sposta la pagina in base alla percentuale
    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth' // Questo rende lo scorrimento animato
    });
  }



  contact() {
    // Calcola la percentuale dello scorrimento
    const windowHeight = window.innerHeight;
    const scrollPercentage = 7.4; // Puoi impostare la percentuale desiderata

    // Sposta la pagina in base alla percentuale
    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth' // Questo rende lo scorrimento animato
    });
  }


}



