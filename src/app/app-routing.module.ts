import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from 'src/app/games-wrapper/wrapper.component';
import { CategoryResolverService } from 'src/app/services/categoryResolver/categoryResolver.service';

const routes: Routes = [
  { path: ':category', component: WrapperComponent, resolve: { category: CategoryResolverService } },
  { path: '**', redirectTo: 'new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
