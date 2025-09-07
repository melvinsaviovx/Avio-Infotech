import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from "./components/home/home";
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Founders } from './components/founders/founders';
import { Contact } from './components/contact/contact';
import { Footer } from "./components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Services, Founders, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Techavio');
}
