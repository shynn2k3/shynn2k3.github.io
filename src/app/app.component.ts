import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  onActivate(e: any) {
    window.scroll({
      top: 100,
      left: 10,
      behavior: 'smooth'
    });
  }
}
