import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryResolverService } from 'src/app/services/categoryResolver.service';
import { JackpotGameComponent } from 'src/app/jackpot-game/jackpot-game.component';

const routes: Routes = [
  { path: 'jackpot/:category', component: JackpotGameComponent, resolve: { category: CategoryResolverService } },
  { path: '**', redirectTo: 'jackpot/new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
