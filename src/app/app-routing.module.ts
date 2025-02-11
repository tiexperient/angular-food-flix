import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaltCategoryComponent } from './page/salt-category/salt-category.component';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/content/content.component';

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
    path: 'receita/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
