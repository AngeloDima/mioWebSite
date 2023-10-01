import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABOUTComponent implements OnInit {

  showRedOverlay = true;
  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.showRedOverlay = false;
    }, 500);
  }

}



