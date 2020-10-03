export enum Category {
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
}

export interface JackpotFeed {
    game: string;
    amount: number;
}
