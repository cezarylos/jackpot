import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category, GameFeed, JackpotFeed } from 'src/app/jackpot.typings';
import { FeedService } from 'src/app/services/feed/feed.service';

@Component({
    selector: 'app-games-wrapper',
    templateUrl: './games-wrapper.component.html',
    styleUrls: ['./games-wrapper.component.scss']
})
export class GamesWrapperComponent implements OnInit {

    public category: Category;
    public gameFeedMap = new Map<string, GameFeed>();
    public feedsReady: boolean;

    constructor(private activatedRoute: ActivatedRoute,
                private feedService: FeedService) {
    }

    public ngOnInit(): void {
        this.setCategoryBasedOnPath();
        this.prepareFeeds().finally();
    }

    private setCategoryBasedOnPath(): void {
        this.activatedRoute.params.subscribe((params: { category: Category }) => {
            this.category = params.category;
        });
    }

    private async prepareFeeds(): Promise<void> {
        try {
            const gameFeed = await this.feedService.getGameFeed();
            gameFeed.forEach(game => {
                this.gameFeedMap.set(game.id, game);
            });

            const jackpotFeed = await this.feedService.getJackpotFeed();
            this.updateJackpots(jackpotFeed);

            this.feedsReady = !!(gameFeed && jackpotFeed);
        } catch (e) {
            console.error(e);
        }
    }

    private updateJackpots(jackpotFeed: JackpotFeed[]): void {
        jackpotFeed.forEach(jackpot => {
            const gameToUpdate = this.gameFeedMap.get(jackpot.game);
            if (!gameToUpdate) {
                return;
            }

            gameToUpdate.jackpot = jackpot.amount;
            this.gameFeedMap.set(gameToUpdate.id, gameToUpdate);
        });
    }
}
