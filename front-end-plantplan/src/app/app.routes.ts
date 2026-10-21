import { Routes } from '@angular/router';
import { Header } from './ui/shell/header/header';
import { Support } from './ui/content/support/support'
import { About } from './ui/content/about/about'
import { GardenerLandingPage } from './ui/content/gardener/gardener-landing-page/gardener-landing-page';
import { Impressum } from './ui/content/impressum/impressum';
import { GardenBedInspirations } from './ui/content/gardener/garden-bed-inspirations/garden-bed-inspirations';
import { GardenersGardenBeds } from './ui/content/gardener/gardeners-garden-beds/gardeners-garden-beds';
import { NewGardenBed } from './ui/content/gardener/new-garden-bed/new-garden-bed';
import { NewPlant } from './ui/content/gardener/new-plant/new-plant';
import { PlantCatalog } from './ui/content/gardener/plant-catalog/plant-catalog';
import { LandingPage } from './ui/content/visitor/landing-page/landing-page';
import { AdminLandingPage } from './ui/content/admin/admin-landing-page/admin-landing-page';
import { LogCatalog } from './ui/content/admin/log-catalog/log-catalog';
import { ToDos } from './ui/content/admin/to-dos/to-dos';
import { UserCataloge } from './ui/content/admin/user-cataloge/user-cataloge';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    //Footer
    {
        path: 'support',
        component: Support
    },
  {
    path: 'about',
    component: About
  },
  {
    path: 'imprint',
    component: Impressum
  },
  //Gardener Menu
  {
    path: 'garden-bed-inspiration',
    component: GardenBedInspirations
  },
  {
    path: 'gardener-home',
    component: GardenerLandingPage
  },
  {
    path: 'garden-beds',
    component: GardenersGardenBeds
  },
  {
    path: 'garden-bed-editor',
    component: NewGardenBed
  },
  {
    path: 'plants',
    component: PlantCatalog
  },
  {
    path: 'add-plant',
    component: NewPlant
  },
  //Admin Menu
  {
    path: 'home',
    component: AdminLandingPage
  },
  {
    path: 'users',
    component: UserCataloge
  },
  {
    path: 'logs',
    component: LogCatalog
  },
  {
    path: 'needs-checking',
    component: ToDos
  },
];
