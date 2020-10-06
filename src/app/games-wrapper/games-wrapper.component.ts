import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Category, GameFeed, JackpotFeed, RibbonText } from 'src/app/jackpot.typings';
import { FeedService } from 'src/app/services/feed/feed.service';

@Component({
    selector: 'app-games-wrapper',
    templateUrl: './games-wrapper.component.html',
    styleUrls: ['./games-wrapper.component.scss']
})
export class GamesWrapperComponent implements OnInit, OnDestroy {

    public category: Category;
    public feedsReady: boolean;
    public gameFeed = new Map<string, GameFeed>();
    private subscriptions = new Subscription();
    private jackpotUpdater: number;

    constructor(private activatedRoute: ActivatedRoute, private feedService: FeedService) {
    }

    public ngOnInit(): void {
        this.setCategoryBasedOnPath();
        this.prepareFeeds().finally();

        const UPDATE_TIME_IN_MS = 5000;
        this.updateJackpotsEveryMs(UPDATE_TIME_IN_MS);
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
        clearInterval(this.jackpotUpdater);
    }

    private setCategoryBasedOnPath(): void {
        this.subscriptions.add(this.activatedRoute.params
            .subscribe((params: { category: Category }) => this.category = params.category));
    }

    private async prepareFeeds(): Promise<void> {
        try {
            const gameFeed = await this.feedService.getGameFeed();
            gameFeed.forEach(game => {
                if (game.categories.includes(Category.new)) {
                    game.ribbonText = RibbonText.new;
                }
                if (game.categories.includes(Category.top)) {
                    game.ribbonText = RibbonText.top;
                }
                this.gameFeed.set(game.id, game);
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
            const gameToUpdate = this.gameFeed.get(jackpot.game);
            if (!gameToUpdate) {
                return;
            }
            gameToUpdate.jackpot = jackpot.amount;
        });
    }

    private updateJackpotsEveryMs(timeInMs: number): void {
        this.jackpotUpdater = setInterval(async () => {
            const jackpotFeed = await this.feedService.getJackpotFeed();
            this.updateJackpots(jackpotFeed);
        }, timeInMs);
    }
}
