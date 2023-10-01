import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { CorsiSecComponent } from './home/corsi-sec/corsi-sec.component';
import { FreeLanceComponent } from './home/free-lance/free-lance.component';



const routes: Routes = [
  { path: '', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
