import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateChange } from 'ng-lazyload-image';
import { Subscription } from 'rxjs';

import { Category, GameFeed } from 'src/app/jackpot.typings';

@Component({
    selector: 'app-jackpot-game',
    templateUrl: './jackpot-game.component.html',
    styleUrls: ['./jackpot-game.component.scss']
})
export class JackpotGameComponent implements OnInit, OnDestroy {

    @Input() game: GameFeed;

    public categoryTopOrNew: boolean;
    private subscriptions = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.subscriptions.add(this.activatedRoute.params.subscribe((params: { category: Category }) => {
            this.categoryTopOrNew = params.category === Category.top || params.category === Category.new;
        }));
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public handleImgError(state: StateChange): void {
        const LOADING_FAILED_STATUS = 'loading-failed';
        if (state.reason !== LOADING_FAILED_STATUS) {
            return;
        }
        this.game.imgError = true;
        this.cdr.detectChanges();
    }
}
