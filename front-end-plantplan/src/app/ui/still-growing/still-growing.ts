import { Component, inject, input } from '@angular/core';
import { TextService } from '../../services/text-service/text-service';

/*
This component is a placeholder for features that are still under development. 
It displays a message indicating that the feature is "still growing"
*/

@Component({
  selector: 'app-still-growing',
  imports: [],
  templateUrl: './still-growing.html',
  styleUrl: './still-growing.scss',
})
export class StillGrowing {
  private readonly textService = inject(TextService);
  
  readonly txtSideName = input.required<string>();
  readonly txtGrowing = this.textService.textAsComputedSignal("still_growing");
  readonly txtSorry = this.textService.textAsComputedSignal("sorry");
}
