import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showRedOverlay = false;

  constructor(private router: Router) { }

  transition() {
    this.showRedOverlay = true;
    setTimeout(() => {
      this.router.navigate(['/about']);
    }, 700);
  }
}
