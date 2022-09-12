import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabiitDetailComponent } from './habiit-detail/habiit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabiitDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
