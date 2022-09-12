import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
