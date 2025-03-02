import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/dados/dataFake';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css', './subcategory.component.responsive.css']
})
export class SubcategoryComponent implements OnInit {

  foods: any[] = [];
  subcategoryName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Captura o parâmetro da URL
    this.route.paramMap.subscribe(params => {
      this.subcategoryName = params.get('name') || '';

      // Filtra os dados pela subcategoria escolhida
      this.foods = dataFake.filter(item => item.subcategory.includes(this.subcategoryName)).map(item => ({
        image: item.photoCover,
        title: item.title,
        resume: item.resume,
        id: item.id
      }));
    });
  }
}
