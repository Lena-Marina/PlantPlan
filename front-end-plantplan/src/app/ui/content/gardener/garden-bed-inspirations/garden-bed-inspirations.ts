import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-garden-bed-inspirations',
  imports: [ StillGrowing],
  templateUrl: './garden-bed-inspirations.html',
  styleUrl: './garden-bed-inspirations.scss',
})
export class GardenBedInspirations {
  private readonly textService = inject(TextService);
  readonly txtGardenBedInspo = this.textService.textAsComputedSignal("menu_gardener_gardenBed_inspiration");

  

}
