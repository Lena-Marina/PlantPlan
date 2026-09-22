import { Injectable, inject, computed } from '@angular/core';
import { LanguageCode } from '../../types/language-codes';
import { AppState } from '../../states/app-state';

@Injectable({
  providedIn: 'root', //Service is available application-wide
})
export class TextService {
  private readonly appState = inject(AppState);

  private readonly _textMap:
    Map<LanguageCode, Map<string, string>> = new Map([

      // English texts
      ['EN' as LanguageCode, new Map<string, string>([
        ['test-key', 'I am a test text in English.'],
      ])],

      // German texts
      ['DE' as LanguageCode, new Map<string, string>([
        ['test-key', 'Ich bin ein Testtext auf Deutsch.'],
      ])],

      // If more Languages are added (here) - all exsiting keys need to be provided in the new language!

    ]);

  // Retrieves a text using the currently selected language from the AppState
  getText(key: string): string {
    const language = this.appState.selectedLanguage();

    const text = this._textMap.get(language)?.get(key);

    if (text === undefined) {
      console.error(
        `Text for key "${key}" not found in language "${language}".`
      );
    }

    return text ?? 'error: text not found';
  }

  text(key: string) {
    return computed(() => {
      const language = this.appState.selectedLanguage();

      const text = this._textMap.get(language)?.get(key);

      if (text === undefined) {
        //ToDo: Logging
        console.error(
          `Text for key "${key}" not found in language "${language}".`
      );
    }

      return text ?? 'error: text not found';
    });
  }
}

