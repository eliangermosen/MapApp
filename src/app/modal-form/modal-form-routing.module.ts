import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFormPage } from './modal-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormPageRoutingModule {}
