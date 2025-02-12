import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/dados/dataFake';

@Component({
  selector: 'app-salt-category',
  templateUrl: './salt-category.component.html',
  styleUrls: ['./salt-category.component.css', './salt-category.component.responsive.css']
})
export class SaltCategoryComponent implements OnInit {

  // Lista de receitas salgadas
  foods: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Filtrando apenas os registros com status "salgados"
    this.foods = dataFake.filter(item => item.category === "salgados").map(item => ({
      image: item.photoCover,
      title: item.title,
      resume: item.resume,
      id: item.id
    }));
  }
}
