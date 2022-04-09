import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My components
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


const routes: Routes = [

  {path: '', component: MainPageComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'history', component: LogHistoryComponent},
  {path: 'wishlist', component: WishListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
