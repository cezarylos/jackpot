import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jackpot-game',
  templateUrl: './jackpot-game.component.html',
  styleUrls: ['./jackpot-game.component.scss']
})
export class JackpotGameComponent implements OnInit {

  private category: string;

  constructor(private activatedRoute: ActivatedRoute, private navbarService: NavbarService) {
    this.navbarService.getSelectedCategory().subscribe(category => console.log(category));
   }

  ngOnInit(): void {
    this.setCategoryBasedOnPath();
  }

  setCategoryBasedOnPath(): void {
    const { activatedRoute, navbarService } = this;
    activatedRoute.params.subscribe((param: { category: string }) => {
     const { category } = param;
     navbarService.setSelectedCategory(category); 
     this.category = category;
    });
  }
}
