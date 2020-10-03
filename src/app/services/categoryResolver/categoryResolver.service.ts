import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Category } from 'src/app/jackpot.typings';


@Injectable({ providedIn: 'root' })
export class CategoryResolverService implements Resolve<string> {

    constructor(private router: Router) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | null {
        const { category } = route.params;

        if (Object.keys(Category).includes(category)) {
            return null;
        }
        this.router.navigate(['**']).finally();
    }
}
