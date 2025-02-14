import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaltCategoryComponent } from './page/salt-category/salt-category.component';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/content/content.component';
import { SweetCategoryComponent } from './page/sweet-category/sweet-category.component';

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
    path: 'receita/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
