import { Component, inject } from '@angular/core';
import { StillGrowing } from '../../../still-growing/still-growing';
import { TextService } from '../../../../services/text-service/text-service';

@Component({
  selector: 'app-user-cataloge',
  imports: [ StillGrowing ],
  templateUrl: './user-cataloge.html',
  styleUrl: './user-cataloge.scss',
})
export class UserCataloge {
  private readonly textService = inject(TextService);
  readonly txtTitel = this.textService.textAsComputedSignal("menu_admin_users");

}
