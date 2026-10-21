import { Injectable, inject, computed, Signal } from '@angular/core';
import { LanguageCode } from '../../types/language-codes';
import { AppState } from '../../states/app-state';

/*
This Service provides Components with texts as Signals, based on the selectedLanguage in the AppState.

If a New Text is added, it has to be added with the same key in each language's map!

If a New language is added, it has to contain every key, the other languages contain!

keys use snake_case (for readability of long keys).
*/
@Injectable({
  providedIn: 'root', //Service is available application-wide
})
export class TextService {
  private readonly appState = inject(AppState);

  private readonly _textMap:
    Map<LanguageCode, Map<string, string>> = new Map([

      // English texts
      ['EN' as LanguageCode, new Map<string, string>([
        ['test_key', 'I am a test text in English.'],
        ['flag_for', 'Flag for '],
        //menu
        ['menu_titel', 'Menu'],
        ['menu_login_or_register', 'Login or register'],
        ['menu_logout', 'Logout'],
        ['menu_language_selector_label', 'Language: '],
        ['menu_welcome', 'Welcome '],
        ['menu_close', 'Close menu'],
        //Menu items - Gardener Menu
        ['menu_gardener_home', 'home'],
        ['menu_gardener_gardenBeds', 'My Garden Beds'],
        ['menu_gardener_add_new_gardenBed', 'Add New Garden Bed'],
        ['menu_gardener_gardenBed_inspiration', 'Garden Bed Inspiration'],
        ['menu_gardener_plants', 'Plants'],
        ['menu_gardener_add_new_plant', 'Add New Plant'],
        //Menu items - Admin Menu
        ['menu_admin_home', 'Home'],
        ['menu_admin_users', 'Users'],
        ['menu_admin_logs', 'Logs'],
        ['menu_admin_needs_checking', 'To Do'],

        //Footer
        ['footer_about_project', 'about the project'],
        ['footer_attributions', 'attributions'],
        ['footer_support', 'support us'],
        ['footer_imprint', 'imprint'],

        //Language Selector
        ['language_selector_arialabel', 'Choose language. currently selected: '],

        //Developement
        ['still_growing', 'is still growing!'],
        ['sorry', 'we are sorry'],
      ])],

      // German texts
      ['DE' as LanguageCode, new Map<string, string>([
        ['test_key', 'Ich bin ein Testtext auf Deutsch.'],
        ['flag_for', 'Flagge für '],
        
        //Menu
        ['menu_titel', 'Menü'],
        ['menu_login_or_register', 'Einloggen / Registrieren'],
        ['menu_logout', 'ausloggen'],
        ['menu_language_selector_label', 'Sprache: '],
        ['menu_welcome', 'Willkommen '],
        ['menu_close', 'Menü minimieren'],
        //Menu items - Gardener Menu
        ['menu_gardener_home', 'Startseite'],
        ['menu_gardener_gardenBeds', 'Meine Beete'],
        ['menu_gardener_add_new_gardenBed', 'Neues Beet anlegen'],
        ['menu_gardener_gardenBed_inspiration', 'Beet Inspirationen'],
        ['menu_gardener_plants', 'Pflanzen'],
        ['menu_gardener_add_new_plant', 'Neue Pflanze hinzufügen'],
        //Menu items - Admin Menu
        ['menu_admin_home', 'Startseite'],
        ['menu_admin_users', 'Benutzer'],
        ['menu_admin_logs', 'Logs'],
        ['menu_admin_needs_checking', 'Muss überprüft werden'],

        //Footer
        ['footer_about_project', 'Über das Projekt'],
        ['footer_attributions', 'Attributionen'],
        ['footer_support', 'unterstütze uns'],
        ['footer_imprint', 'Impressum'],

        //Language Selector
        ['language_selector_arialabel', 'Sprache auswählen. Aktuelle Sprache: '],

        //Developement
        ['still_growing', 'wächst noch!'],
        ['sorry', 'tut uns leid'],
      ])],

      // If more Languages are added (here) - all exsiting keys need to be provided in the new language!

    ]);

  // Retrieves a text as a computed signal using the currently selected language from the AppState
  textAsComputedSignal(key: string): Signal<string> {
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

