import { Injectable, signal, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { User } from '../models/user';
import { LanguageCode } from '../types/language-codes';


@Injectable({
  providedIn: 'root',
})
export class AppState {  
  //Private Signals
  private readonly _selectedLanguage = signal<LanguageCode>('DE');
  private readonly _loggedInUser = signal<User | null>(null);
  private readonly _isMobile = signal<boolean>(false);
  private readonly _menuOpen = signal<boolean>(true);  
  
  // Read-only access to signals for other components
  readonly selectedLanguage = this._selectedLanguage.asReadonly();
  readonly loggedInUser = this._loggedInUser.asReadonly();
  readonly isMobile = this._isMobile.asReadonly();
  readonly menuOpen = this._menuOpen.asReadonly();


  // BreakpointObserver
  private readonly breakpointObserver = inject(BreakpointObserver);

  //Constructor
  constructor() {
    this.setLoggedInUser(this.createGardener());

    this.breakpointObserver
      .observe('(max-width: 767.98px)')
      .subscribe(result => {
        const mobile = result.matches;

        this._isMobile.set(mobile);
        this._menuOpen.set(!mobile);
      });
}

  //Setter for signals
  setSelectedLanguage(language: LanguageCode): void {
    this._selectedLanguage.set(language);
  }
  setLoggedInUser(user: User): void {
    this._loggedInUser.set(user);
  }
  changeMenuOpen(): void {
    this._menuOpen.set(!this._menuOpen());
  }

  //further methods
  logout(): void {
    //Function because logout is called from different components (Menu and Header)
    this._loggedInUser.set(null);
  }

  //Developement
createAdmin(): User {
  return new User(
    crypto.randomUUID(),
    'Admin',
    'admin@test.at',
    false,
    'DE',
    0,
    [],
    'ADMIN'
  );
}

createGardener(): User {
  return new User(
    crypto.randomUUID(),
    'Gardener',
    'gardener@test.at',
    false,
    'DE',
    0,
    [],
    'GARDENER'
  );
}
  
}

