import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';


@Component({
  selector: 'app-new-garden-bed',
  imports: [ StillGrowing ],
  templateUrl: './new-garden-bed.html',
  styleUrl: './new-garden-bed.scss',
})
export class NewGardenBed {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_gardener_add_new_gardenBed");

}
