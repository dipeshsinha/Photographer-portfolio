import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cursorPositionX = 0
  cursorPositionY = 0

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    this.cursorPositionX = e.clientX
    this.cursorPositionY = e.clientY
  }
  
}
