import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { WrapperComponent } from 'src/app/games-wrapper/wrapper.component';
import { JackpotGameComponent } from 'src/app/jackpot-game/jackpot-game.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CategoryPipe } from 'src/app/pipes/category.pipe';
import { FeedService } from 'src/app/services/feed/feed.service';
import { NgxScrollTopModule } from 'ngx-scrolltop';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        JackpotGameComponent,
        WrapperComponent,
        CategoryPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        LazyLoadImageModule,
        NgxScrollTopModule
    ],
    providers: [
        FeedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
