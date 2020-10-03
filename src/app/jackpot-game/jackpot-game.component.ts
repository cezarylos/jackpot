import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { StateChange } from 'ng-lazyload-image';

import { GameFeed } from 'src/app/jackpot.typings';

@Component({
    selector: 'app-jackpot-game',
    templateUrl: './jackpot-game.component.html',
    styleUrls: ['./jackpot-game.component.scss']
})
export class JackpotGameComponent {

    @Input() game: GameFeed;

    constructor(private cdr: ChangeDetectorRef) {
    }

    handleImgError(state: StateChange): void {
        if (state.reason !== 'loading-failed') {
         return;
        }
        this.game.imgError = true;
        this.cdr.detectChanges();
    }
}
