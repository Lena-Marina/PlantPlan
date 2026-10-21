import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../still-growing/still-growing';
import { TextService } from '../../../services/text-service/text-service';

@Component({
  selector: 'app-impressum',
  imports: [StillGrowing],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {
  private readonly textService = inject(TextService);
  readonly txtImprint = this.textService.textAsComputedSignal("footer_imprint");
}
