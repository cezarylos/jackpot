export enum Category {
    top = 'top',
    new = 'new',
    slots = 'slots',
    jackpots = 'jackpots',
    live = 'live',
    blackjack = 'blackjack',
    roulette = 'roulette',
    table = 'table',
    poker = 'poker',
    other = 'other'
}

export enum CategoryLabel {
    top = 'Top Games',
    new = 'New Games',
    slots = 'Slots',
    jackpots = 'Jackpots',
    live = 'Live',
    blackjack = 'Blackjack',
    roulette = 'Roulette',
    table = 'Table',
    poker = 'Poker',
    other = 'Other'
}

export enum OtherSubcategories {
    ball = 'ball',
    virtual = 'virtual',
    fun = 'fun'
}

export interface GameFeed {
    categories: Array<Category | OtherSubcategories>;
    name: string;
    image: string;
    id: string;
    jackpot: number;
    imgError?: boolean;
    ribbonText?: RibbonText;
}

export enum RibbonText {
    new = 'NEW',
    top = 'TOP'
}

export interface JackpotFeed {
    game: string;
    amount: number;
}
