import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from "./components/home/home";
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About,Services,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Techavio');
}
