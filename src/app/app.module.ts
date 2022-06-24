import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WesleyHomeComponent } from './wesley-home/wesley-home.component';
import { WesleyListComponent } from './wesley-list/wesley-list.component';
import { WesleyListService } from './wesley-list.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WesleyHomeComponent },
      { path: 'feriados', component: WesleyListComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    WesleyHomeComponent,
    WesleyListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [WesleyListService],
})
export class AppModule {}
