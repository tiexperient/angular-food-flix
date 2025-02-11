import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/dados/dataFake';
import { FoodItem } from 'src/app/model/food.module';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  foodItem: FoodItem | undefined; // Armazena os dados da comida
  id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    this.foodItem = dataFake.find(article => article.id === id);
  }
}
