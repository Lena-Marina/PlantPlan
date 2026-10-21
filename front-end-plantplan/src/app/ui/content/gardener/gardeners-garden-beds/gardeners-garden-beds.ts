import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-gardeners-garden-beds',
  imports: [ StillGrowing],
  templateUrl: './gardeners-garden-beds.html',
  styleUrl: './gardeners-garden-beds.scss',
})
export class GardenersGardenBeds {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_gardener_gardenBeds");

}
