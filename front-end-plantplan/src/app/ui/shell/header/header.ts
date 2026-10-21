import { Component, inject, computed, signal } from '@angular/core';
import { TextService } from '../../../services/text-service/text-service';
import { LANGUAGE_CODES, LanguageCode } from '../../../types/language-codes';
import { AppState } from '../../../states/app-state';
import { LanguageSelector } from '../../widgets/language-selector/language-selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSelector],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  //Injects
  readonly appState = inject(AppState);
  private readonly textService = inject(TextService);

  //Texts
  readonly txtMenuTitel = this.textService.textAsComputedSignal("menu_titel");
  readonly txtLogin = this.textService.textAsComputedSignal("menu_login_or_register");
  readonly txtLogout = this.textService.textAsComputedSignal("menu_logout");
  readonly txtLabelLanguageSelection = this.textService.textAsComputedSignal("menu_language_selector_label");

  readonly txtWelcome = computed(() => {
    const user = this.appState.loggedInUser();

    if (user != null) {
      return this.textService.textAsComputedSignal("menu_welcome")() 
        + " " 
        + user.username;
    }

    return "";
  });

}
