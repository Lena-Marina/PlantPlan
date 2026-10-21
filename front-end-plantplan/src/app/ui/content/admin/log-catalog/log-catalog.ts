import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-log-catalog',
  imports: [ StillGrowing],
  templateUrl: './log-catalog.html',
  styleUrl: './log-catalog.scss',
})
export class LogCatalog {
    private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_admin_logs");

}
