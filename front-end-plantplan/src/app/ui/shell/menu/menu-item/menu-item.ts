import { Component, input, output, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  readonly label = input.required<Signal<string>>();
  readonly route = input.required<string>();

  itemClicked = output<void>();
}
