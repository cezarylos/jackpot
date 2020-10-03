import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Category, GameFeed, JackpotFeed } from 'src/app/jackpot.typings';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(private http: HttpClient) {
    }

    public getGameFeed(): Promise<GameFeed[]> {
        return this.http.get<GameFeed[]>(`${environment.API_URL}/games.php`).toPromise();
    }

    public getJackpotFeed(): Promise<JackpotFeed[]> {
        return this.http.get<JackpotFeed[]>(`${environment.API_URL}/jackpots.php`).toPromise();
    }

    public filterGamesByCategory(category: Category, games: GameFeed[]): GameFeed[] {
        return games.filter(game => game.categories.includes(category));
    }
}
