import { Component, inject, computed, signal } from '@angular/core';
import { AppState } from '../../../states/app-state';
import { TextService } from '../../../services/text-service/text-service';
import { MenuItem } from './menu-item/menu-item';
import { MenuItemModel } from '../../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  //Injects
  readonly appState = inject(AppState);
  private readonly textService = inject(TextService);

  //Texts
  readonly txtMenuTitel = this.textService.textAsComputedSignal('menu_titel');
  readonly txtCloseMenu = this.textService.textAsComputedSignal('menu_close');

  readonly menuItems = computed<MenuItemModel[]>(() => {
    const user = this.appState.loggedInUser();

    if (!user) {
      return [
        {
          label: this.textService.textAsComputedSignal('menu_login_or_register'),
          route: '/login-or-register',
        },
      ];
    }

    let items: MenuItemModel[];

    if (user.userLevel === 'GARDENER') {
      items = [
        {
          label: this.textService.textAsComputedSignal('menu_gardener_home'),
          route: '/gardener-home',
        },
        {
          label: this.textService.textAsComputedSignal('menu_gardener_gardenBeds'),
          route: '/garden-beds',
        },
        {
          label: this.textService.textAsComputedSignal('menu_gardener_add_new_gardenBed'),
          route: '/garden-bed-editor',
        },
        {
          label: this.textService.textAsComputedSignal('menu_gardener_gardenBed_inspiration'),
          route: '/garden-bed-inspiration',
        },
        {
          label: this.textService.textAsComputedSignal('menu_gardener_plants'),
          route: '/plants',
        },
        {
          label: this.textService.textAsComputedSignal('menu_gardener_add_new_plant'),
          route: '/add-plant',
        },
      ];
    } else if (user.userLevel === 'ADMIN') {
      items = [
        {
          label: this.textService.textAsComputedSignal('menu_admin_home'),
          route: '/home',
        },
        {
          label: this.textService.textAsComputedSignal('menu_admin_users'),
          route: '/users',
        },
        {
          label: this.textService.textAsComputedSignal('menu_admin_logs'),
          route: '/logs',
        },
        {
          label: this.textService.textAsComputedSignal('menu_admin_needs_checking'),
          route: '/needs-checking',
        },
      ];
    } else {
      return [];
    }

    if (this.appState.isMobile()) {
      items.push({
        label: this.textService.textAsComputedSignal('menu_logout'),
        route: '',
        action: 'logout',
      });
    }

    return items;
  });

  //Functions
  changeMenuOpen(): void {
    this.appState.changeMenuOpen();
  }
  
  onMenuItemClicked(item: MenuItemModel): void { //this function is needed, so that on mobile the menu closes when a menu item is clicked
    if (item.action === 'logout') {
      this.appState.logout();
    }

    if (this.appState.isMobile() && this.appState.menuOpen()) {
      this.changeMenuOpen();
    }
  }
}
