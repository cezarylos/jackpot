import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Categories } from 'src/app/navbar/navbar.component';

@Injectable({ providedIn: 'root' })
export class CategoryResolverService implements Resolve<string> {
    constructor(private router: Router) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
      const { category } = route.params;
      if (Object.keys(Categories).includes(category)) {
        return null
      }
      this.router.navigate(['**']);
    }
}