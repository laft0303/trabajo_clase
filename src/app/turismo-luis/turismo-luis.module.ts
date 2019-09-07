import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TurismoLuisPage } from './turismo-luis.page';

const routes: Routes = [
  {
    path: '',
    component: TurismoLuisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TurismoLuisPage]
})
export class TurismoLuisPageModule {}
