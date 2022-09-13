import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
