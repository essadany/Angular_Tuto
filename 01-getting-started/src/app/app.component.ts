import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Getting Started';
  header = 'This is the header of the app component';
  body = ' This is the body of the app component';
  footer = 'This is the footer of the app component';
}
