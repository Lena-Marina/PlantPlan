import { Component, inject, computed } from '@angular/core';
import { TextService } from '../../services/text-service/text-service';
import { FormsModule } from '@angular/forms';
import { LANGUAGE_CODES, LanguageCode } from '../../types/language-codes';
import { AppState } from '../../states/app-state';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly appState = inject(AppState);
  private readonly textService = inject(TextService);
  languages = LANGUAGE_CODES;

  readonly testText = this.textService.text('test-key');

  changeLanguage(language: LanguageCode): void {
    this.appState.setSelectedLanguage(language);
  }

}
