import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Aggiungi questa importazione




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { CiaoAngeloComponent } from './home/ciao-angelo/ciao-angelo.component';
import { CorsiSecComponent } from './home/corsi-sec/corsi-sec.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ContattamiComponent } from './home/Progetti/contattami.component';
import { AnimazioneCompetenzeComponent } from './home/animazione-competenze/animazione-competenze.component';
import { FreeLanceComponent } from './home/free-lance/free-lance.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { SocialComponent } from './home/social/social.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CiaoAngeloComponent,
    CorsiSecComponent,
    AboutMeComponent,
    ContattamiComponent,
    AnimazioneCompetenzeComponent,
    FreeLanceComponent,
    ContactMeComponent,
    SocialComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Aggiungi il modulo BrowserAnimationsModule qui
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
