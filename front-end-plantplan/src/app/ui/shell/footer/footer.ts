import { Component, inject, computed } from '@angular/core';
import { TextService } from '../../../services/text-service/text-service';
import { RouterLink } from '@angular/router';
import { AppState } from '../../../states/app-state';
import { LanguageSelector } from '../../widgets/language-selector/language-selector';


@Component({
  selector: 'app-footer',
  imports: [RouterLink, LanguageSelector],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  //Injects
  private readonly textService = inject(TextService);
  readonly appState = inject(AppState);

  //Texts
  readonly txtAbout = this.textService.textAsComputedSignal("footer_about_project");
  readonly txtAttribution = this.textService.textAsComputedSignal("footer_attributions");
  readonly txtSupport = this.textService.textAsComputedSignal("footer_support");
  readonly txtImprint = this.textService.textAsComputedSignal("footer_imprint");
  readonly txtLabelLanguageSelection = this.textService.textAsComputedSignal("menu_language_selector_label");

}
