import { Component } from '@angular/core';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title: String;

  constructor() {
  this.title = "Alos State Ngrx";
  }
}
