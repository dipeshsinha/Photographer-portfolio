import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mainNav') mainNav!: ElementRef;

  screenWidth = 0
  screenHeight = 0
  public navbarStyle = ''

  ngOnInit() {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    
    if ( this.screenWidth < this.screenHeight && this.screenWidth > 600 ){
      this.navbarStyle = 'navbar'
    }
  }

  getNavbarStyle() {
    return 'navbar'
  }

}
