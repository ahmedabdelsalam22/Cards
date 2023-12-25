import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardsService } from './Service/cards.service';
import { Card } from './Models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Cards';

  cardsList: Card[] = [];

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getAllCards().subscribe((res) => {
      console.log(res);
    });
  }
}
