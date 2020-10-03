import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesWrapperComponent } from 'src/app/games-wrapper/games-wrapper.component';
import { CategoryResolverService } from 'src/app/services/categoryResolver/categoryResolver.service';

const routes: Routes = [
  { path: 'jackpot/:category', component: GamesWrapperComponent, resolve: { category: CategoryResolverService } },
  { path: '**', redirectTo: 'jackpot/new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
