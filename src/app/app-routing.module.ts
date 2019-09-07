import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'turismo-luis', loadChildren: './turismo-luis/turismo-luis.module#TurismoLuisPageModule' },
  { path: 'edad-heroes', loadChildren: './edad-heroes/edad-heroes.module#EdadHeroesPageModule' },
  { path: 'nuevoluis', loadChildren: './nuevoluis/nuevoluis.module#NuevoluisPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
