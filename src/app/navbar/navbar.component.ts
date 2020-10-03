import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category, CategoryLabel } from 'src/app/jackpot.typings';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

    @Input() selectedCategory: Category;

    public categoryLabel = CategoryLabel;
    public categories: string[] = Object.keys(Category);

    constructor(private router: Router) {
    }

    public selectCategory(category: string): void {
        this.router.navigate(['jackpot', category]).finally();
    }

}
