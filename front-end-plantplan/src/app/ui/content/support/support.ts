import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../still-growing/still-growing';
import { TextService } from '../../../services/text-service/text-service';

@Component({
  selector: 'app-support',
  imports: [StillGrowing],
  templateUrl: './support.html',
  styleUrl: './support.scss',
})
export class Support {
  private readonly textService = inject(TextService);
  readonly txtSupport = this.textService.textAsComputedSignal("footer_support");


}
