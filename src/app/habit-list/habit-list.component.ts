import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habitForm;
  habits =[
    {
      id: 1,
      title: "check in with parents once a week"
    },
    {
      id:2,
      title: "check in with parents once a week"
    },
    {
      id: 3,
      title: "check in with parents once a week"
    },   {
      id: 4,
      title: "check in with parents once a week"
    },   {
      id: 5,
      title: "check in with parents once a week"
    }
  ] 
  constructor(private formBuilder: FormBuilder) { 
    this.habitForm = this.formBuilder.group({
      title:'',
    })
  }

  ngOnInit(): void {
  }
  onSubmit(newHabit:any ) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
    this.habitForm.reset( )
  }

}
