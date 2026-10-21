import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-plant-catalog',
  imports: [ StillGrowing],
  templateUrl: './plant-catalog.html',
  styleUrl: './plant-catalog.scss',
})
export class PlantCatalog {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_gardener_plants");

}
