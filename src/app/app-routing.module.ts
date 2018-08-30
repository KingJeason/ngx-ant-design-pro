import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
  },
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
