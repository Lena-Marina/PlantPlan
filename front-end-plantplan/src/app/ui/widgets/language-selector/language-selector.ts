import { Component, input, signal, Signal, inject } from '@angular/core';

import { TextService } from '../../../services/text-service/text-service';
import { AppState } from '../../../states/app-state';
import { LANGUAGE_CODES, LanguageCode } from '../../../types/language-codes';

/*
  In order to add more languages, the language code must be added
  to types/language-codes.ts.
  The corresponding flag must be added to the assets folder and named according to the language code (e.g., 'DE.png' for German).
*/

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
  private readonly appState = inject(AppState);
  private readonly textService = inject(TextService);

  readonly label = input.required<Signal<string>>();

  readonly options = LANGUAGE_CODES;

  readonly isOpen = signal(false);

  readonly selected = this.appState.selectedLanguage;

  readonly txtAltTextFlag = this.textService.textAsComputedSignal('flag_for');
  readonly txtArialabel = this.textService.textAsComputedSignal("language_selector_arialabel");

  toggleDropdown(): void {
    this.isOpen.update((value) => !value);
  }

  selectOption(option: LanguageCode): void {
    this.appState.setSelectedLanguage(option);
    this.isOpen.set(false);
  }
}
