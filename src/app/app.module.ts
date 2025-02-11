import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { CardSaltComponent } from './component/card-salt/card-salt.component';
import { SaltButtonComponent } from './component/salt-button/salt-button.component';
import { SaltCategoryComponent } from './page/salt-category/salt-category.component';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/content/content.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardSaltComponent,
    SaltButtonComponent,
    SaltCategoryComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
