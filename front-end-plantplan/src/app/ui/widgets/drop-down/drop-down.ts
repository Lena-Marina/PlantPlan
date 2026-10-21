import {
  Component,
  input,
  output,
  signal,
  Signal
} from '@angular/core';


@Component({
  selector: 'app-drop-down',
  imports: [],
  templateUrl: './drop-down.html',
  styleUrl: './drop-down.scss',
})
export class DropDown<T> {

  readonly label = input.required<Signal<string>>();
  readonly options = input.required<T[]>();
  readonly isOpen = signal(false);

  // Aktuell ausgewählte Option von außen
  readonly selected = input<T | null>(null);

  // Gibt die ausgewählte Option nach außen weiter
  readonly optionSelected = output<T>();


  toggleDropdown(): void {
    this.isOpen.update(value => !value);
  }


  selectOption(option: T): void {
    this.isOpen.set(false);

    this.optionSelected.emit(option);
  }
}