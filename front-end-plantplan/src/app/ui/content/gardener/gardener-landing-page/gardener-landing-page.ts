import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-gardener-landing-page',
  imports: [ StillGrowing ],
  templateUrl: './gardener-landing-page.html',
  styleUrl: './gardener-landing-page.scss',
})
export class GardenerLandingPage {
  private readonly textService = inject(TextService);
  readonly txtTitel= this.textService.textAsComputedSignal("menu_gardener_home");

}
