import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-new-plant',
  imports: [ StillGrowing ],
  templateUrl: './new-plant.html',
  styleUrl: './new-plant.scss',
})
export class NewPlant {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_gardener_add_new_plant");

}
