import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/dados/dataFake';

@Component({
  selector: 'app-sweet-category',
  templateUrl: './sweet-category.component.html',
  styleUrls: ['./sweet-category.component.css', './sweet-category.component.responsive.css']
})
export class SweetCategoryComponent implements OnInit {

  // Lista de receitas salgadas
  foods: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Filtrando apenas os registros com status "doces"
    this.foods = dataFake.filter(item => item.category === "doces").map(item => ({
      image: item.photoCover,
      title: item.title,
      resume: item.resume,
      id: item.id
    }));
  }
}
