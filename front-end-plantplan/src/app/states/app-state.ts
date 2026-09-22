import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import { LanguageCode } from '../types/language-codes';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  loggedInUser: User | null = null;
  
  //Private Signals
  private readonly _selectedLanguage = signal<LanguageCode>('DE');
  
  // Read-only access to signals for other components
  readonly selectedLanguage = this._selectedLanguage.asReadonly();

  //Setter for signals
  setSelectedLanguage(language: LanguageCode): void {
    this._selectedLanguage.set(language);
  }
}

