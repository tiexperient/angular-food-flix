import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaltCategoryComponent } from './page/salt-category/salt-category.component';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/content/content.component';
import { SweetCategoryComponent } from './page/sweet-category/sweet-category.component';
import { SubcategoryComponent } from './component/subcategory/subcategory.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'salgados',
    component: SaltCategoryComponent
  },
  {
    path: 'doces',
    component: SweetCategoryComponent
  },

  { 
    path: 'subcategoria/:name', 
    component: SubcategoryComponent }, // Rota dinâmica para subcategorias

  {
    path: 'receita/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
