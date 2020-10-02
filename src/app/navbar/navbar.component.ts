import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

export enum Categories {
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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public categoriesEnum = Categories;
  public categories: string[] = Object.keys(Categories);
  public selectedCategory: Categories;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.updateSelectedCategory();
  }

  public updateSelectedCategory(): void {
    this.navbarService.getSelectedCategory().subscribe(category => this.selectedCategory = category);
  }

  public selectCategory(category: Categories): void {
    this.selectedCategory = category;
    this.navbarService.setSelectedCategory(category);
  }

}
