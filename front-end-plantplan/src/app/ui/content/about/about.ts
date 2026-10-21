import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../still-growing/still-growing';
import { TextService } from '../../../services/text-service/text-service';

@Component({
  selector: 'app-about',
  imports: [ StillGrowing ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly textService = inject(TextService);
  readonly txtAbout = this.textService.textAsComputedSignal("footer_about_project");

}
