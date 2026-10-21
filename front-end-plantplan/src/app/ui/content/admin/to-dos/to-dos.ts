import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-to-dos',
  imports: [ StillGrowing ],
  templateUrl: './to-dos.html',
  styleUrl: './to-dos.scss',
})
export class ToDos {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_admin_needs_checking");

}
