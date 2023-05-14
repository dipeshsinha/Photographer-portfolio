import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-track',
  templateUrl: './image-track.component.html',
  styleUrls: ['./image-track.component.css']
})
export class ImageTrackComponent {
  imageLocation = '../../assets/Images/Nature/'
  images = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
  scrollPercent = 0
  tempX = 0

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    if (window.innerWidth <= 948) {
        return 
    }
    this.scrollPercent = (e.clientX/window.innerWidth)*100 - 20
  }

  onMouseDown(e: any) {
    this.tempX = e.clientX
  }
  onMouseUp(e: any) {
    this.tempX = 0
  }


}
