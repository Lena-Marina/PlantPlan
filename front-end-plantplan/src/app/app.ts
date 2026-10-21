import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/shell/header/header';
import { Footer } from './ui/shell/footer/footer';
import { Menu } from './ui/shell/menu/menu';
import { TextService } from './services/text-service/text-service';
import { AppState } from './states/app-state';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly appState = inject(AppState);
  isMobile = computed(() => this.appState.isMobile());

  //protected readonly title = signal('front-end-plantplan');
  
  isAdmin = computed(() =>
    this.appState.loggedInUser()?.userLevel === 'ADMIN'
  );

   
}
