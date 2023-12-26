import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { HearderComponent } from './Header/header.component';
import { QuickSearchComponent } from './Home/quickSearch.component';
import { SearchComponent } from './Home/search.component';
import { FooterComponent } from './Footer/footer.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HomeService } from './services/Home.service';

@NgModule({
  // all the components & pipe
  declarations: [
    AppComponent,
    HearderComponent,
    HomeComponent,
    QuickSearchComponent,
    SearchComponent,
    FooterComponent,
    MyUpperPipe,
  ],

  // All the modules
  imports: [BrowserModule],

  // All the services
  providers: [HomeService],

  // only and only main component
  bootstrap: [AppComponent],
})
export class AppModule {}
