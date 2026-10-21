import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-admin-landing-page',
  imports: [ StillGrowing ],
  templateUrl: './admin-landing-page.html',
  styleUrl: './admin-landing-page.scss',
})
export class AdminLandingPage {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_admin_home");
}
