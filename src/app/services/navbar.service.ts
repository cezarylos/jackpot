import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public setSelectedCategory(category: string): void {
    this.selectedCategory.next(category);
  }

  public getSelectedCategory(): Observable<any> {
    return this.selectedCategory.asObservable();
  }

  private selectedCategory = new Subject();
}
