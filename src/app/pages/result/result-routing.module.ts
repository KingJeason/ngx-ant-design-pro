import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultFailComponent } from './fail/fail.component';
import { ResultSuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'success', component: ResultSuccessComponent },
      { path: 'fail', component: ResultFailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule { }
export const routedComponents = [
  ResultFailComponent,
  ResultSuccessComponent,
];
