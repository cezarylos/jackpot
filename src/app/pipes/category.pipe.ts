import { Pipe, PipeTransform } from '@angular/core';
import { Category, GameFeed, OtherSubcategories } from 'src/app/jackpot.typings';

@Pipe({
    name: 'category',
    pure: false
})
export class CategoryPipe implements PipeTransform {
    transform(games: { key: string, value: GameFeed }[], category: Category): any {
        if (!games || !category) {
            return games;
        }
        return games.filter(game => {
            if (Category[category] !== Category.other) {
                return game.value.categories.includes(category);
            }
            return Object.values(OtherSubcategories).some(subcategory => {
                return game.value.categories.includes(subcategory);
            });
        });
    }
}
