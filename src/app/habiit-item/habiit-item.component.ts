import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habiit-item',
  template: `
   <li>{{habit.title }} </li>
  `,
  styles: [
  ]
})
export class HabiitItemComponent implements OnInit {
  @Input()
  habit!: { id: number; title: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
