import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.countChange.emit(++this.count);
  }

  decrement(){
    this.countChange.emit(--this.count);
  }

}
