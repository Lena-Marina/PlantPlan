import { Signal } from '@angular/core';

export interface MenuItemModel {
  label: Signal<string>;
  route: string;
  action?: 'logout';
}