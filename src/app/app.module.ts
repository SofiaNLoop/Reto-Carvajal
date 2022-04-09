import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NavbarComponent } from './components/main-page/navbar/navbar.component';
import { MainContentComponent } from './components/main-page/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CatalogueComponent,
    LogHistoryComponent,
    WishListComponent,
    NavbarComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
