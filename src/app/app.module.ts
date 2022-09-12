import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabiitDetailComponent } from './habiit-detail/habiit-detail.component';
import { HabiitItemComponent } from './habiit-item/habiit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabiitDetailComponent,
    HabiitItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
